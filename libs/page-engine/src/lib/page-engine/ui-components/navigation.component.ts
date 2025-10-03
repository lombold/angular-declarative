import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Route, RouterLink, Routes } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

interface NavItem {
  label: string;
  url: string;
  children: NavItem[];
}

@Component({
  selector: 'lib-nav',
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <nav>
      <ul>
        @for (item of navTree(); track item) {
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
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public readonly routes = input.required<Routes>();
  public readonly basePath = input<string | undefined>(undefined);
  public readonly deep = input<boolean>(false);
  protected readonly navTree = computed(() => this.mapRoutes(this.routes(), this.deep(), this.basePath()));

  private mapRoutes(routes: Route[], deep: boolean, parentPath?: string): NavItem[] {
    return routes
      .filter((r) => r.path && !r.redirectTo) // skip redirects / empty paths
      .map((r) => {
        const fullPath = parentPath ? parentPath + '/' + r.path : r.path ?? '';
        return {
          label: r.title?.toString() ?? r.path ?? 'undefined',
          url: fullPath,
          children: deep && r.children ? this.mapRoutes(r.children, deep, fullPath) : [],
        };
      });
  }
}
