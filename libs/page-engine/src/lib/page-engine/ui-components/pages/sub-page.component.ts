import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation.component';
import { PageComponent } from './page.component';

@Component({
  selector: 'app-sub-page',
  imports: [AsyncPipe, RouterOutlet, NavigationComponent],
  template: ` <div>
    <header>
      <h2>{{ title | async }}</h2>
      <lib-nav [routes]="routes" [basePath]="basePath" />
    </header>
    <div>
      <router-outlet />
    </div>
  </div>`,
  styles: `
      :host {
          display: block;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubPageComponent extends PageComponent {
  protected readonly activeRoute = inject(ActivatedRoute);
  protected readonly routes = this.activeRoute.routeConfig?.children ?? [];
  protected readonly basePath = this.activeRoute.snapshot.pathFromRoot
    .map((route) => route.url.map((segment) => segment.path).join('/'))
    .filter((path) => path.length > 0)
    .slice(0, -1)
    .join('/');
}
