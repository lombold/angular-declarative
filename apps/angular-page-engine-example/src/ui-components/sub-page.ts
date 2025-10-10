import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageComponent } from '../../../../libs/page-engine/src/lib/page-engine/ui-components/pages/page.component';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../../../libs/page-engine/src/lib/page-engine/ui-components/navigation.component';

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
export class SubPage extends PageComponent {
  protected readonly activeRoute = inject(ActivatedRoute);
  protected readonly routes = this.activeRoute.routeConfig?.children ?? [];
  protected readonly basePath = this.activeRoute.snapshot.pathFromRoot
    .map((route) => route.url.map((segment) => segment.path).join('/'))
    .filter((path) => path.length > 0)
    .slice(0, -1)
    .join('/');
}
