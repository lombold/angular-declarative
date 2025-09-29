import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, Type } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { Page } from './types/page';
import { HEADER_COMPONENT } from './tokens';
import { HeaderComponent } from './ui-components/header.component';
import { PageComponent } from './ui-components/page.component';
import { RootComponent } from './ui-components/root.component';

export function application<THeader extends HeaderComponent>(
  header?: Type<THeader>,
  ...pages: Page[]
): Promise<ApplicationRef> {
  return bootstrapApplication(RootComponent, {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideZoneChangeDetection({ eventCoalescing: true }),
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
    title: page.title,
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
