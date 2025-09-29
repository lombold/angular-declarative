import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef, Component, inject, provideZoneChangeDetection, Type } from '@angular/core';
import { ActivatedRoute, provideRouter, RouterOutlet, Routes } from '@angular/router';
import { Page } from './types/page';
import { map } from 'rxjs';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { HEADER_COMPONENT } from './tokens';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  template: `
    <ng-container *ngComponentOutlet="headerComponent" />
    <router-outlet />
  `,
  imports: [RouterOutlet, NgComponentOutlet],
})
class RootComponent {
  protected readonly headerComponent = inject(HEADER_COMPONENT);
}

@Component({
  selector: 'lib-page',
  template: ` <h1>{{ title | async }}</h1> `,
  imports: [AsyncPipe],
})
class PageComponent {
  readonly pageData = inject(ActivatedRoute).data;
  protected readonly title = this.pageData.pipe(map((p) => p['title']));
}

@Component({
  selector: 'header',
  template: ` <nav>Navigation</nav> `,
  imports: [],
})
export class HeaderComponent {
  readonly pageData = inject(ActivatedRoute).data;
  protected readonly title = this.pageData.pipe(map((p) => p['title']));
}

export function application<THeader extends HeaderComponent>(
  header?: Type<THeader>,
  ...pages: Page[]
): Promise<ApplicationRef> {
  return bootstrapApplication(RootComponent, {
    providers: [
      provideZoneChangeDetection(),
      provideRouter(createRoutes(pages)),
      {
        provide: HEADER_COMPONENT,
        useValue: header,
      },
    ],
  });
}

export function page(title: string): Page {
  return {
    title,
    component: PageComponent,
  };
}

function createRoutes(pages: Page[]): Routes {
  const pageNavigationEntries = pages.map((page) => ({
    path: page.title.toLowerCase(),
    component: page.component,
    data: { title: page.title },
  }));
  return [
    ...pageNavigationEntries,
    {
      path: '**',
      redirectTo: pageNavigationEntries.length ? pageNavigationEntries[0].path : '',
    },
  ];
}
