import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

interface NavItem {
  label: string;
  url: string;
  children: NavItem[];
}

@Component({
  selector: 'nav',
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <ul>
      @for (item of navTree; track item) {
      <ng-container *ngTemplateOutlet="render; context: { $implicit: item }"></ng-container>
      }
    </ul>

    <ng-template #render let-item>
      <li>
        <a [routerLink]="item.url">{{ item.label }}</a>
        @if (item.children.length) {
        <ul>
          @for (child of item.children; track child) {
          <ng-container *ngTemplateOutlet="render; context: { $implicit: child }"></ng-container>
          }
        </ul>
        }
      </li>
    </ng-template>
  `,
  styles: `
      :host {
          display: block;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  private router = inject(Router);
  navTree: NavItem[];

  constructor() {
    this.navTree = this.mapRoutes(this.router.config);
  }

  private mapRoutes(routes: Route[], parentPath: string = ''): NavItem[] {
    return routes
      .filter((r) => r.path && !r.redirectTo) // skip redirects / empty paths
      .map((r) => {
        const fullPath = parentPath + '/' + r.path;
        return {
          label: r.title?.toString() ?? r.path ?? 'undefined',
          url: fullPath,
          children: r.children ? this.mapRoutes(r.children, fullPath) : [],
        };
      });
  }
}
