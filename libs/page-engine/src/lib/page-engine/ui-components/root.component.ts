import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgComponentOutlet } from '@angular/common';
import { HEADER_COMPONENT } from '../tokens';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  template: `
    <ng-container *ngComponentOutlet="headerComponent" />
    <main>
      <router-outlet />
    </main>
  `,
  imports: [RouterOutlet, NgComponentOutlet],
})
export class RootComponent {
  protected readonly headerComponent = inject(HEADER_COMPONENT);
}
