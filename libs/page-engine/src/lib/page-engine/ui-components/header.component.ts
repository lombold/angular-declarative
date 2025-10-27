import { Component, inject } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ad-header',
  template: `
    <header>
      <ad-nav [routes]="routes" />
    </header>
  `,
  imports: [NavigationComponent],
})
export class HeaderComponent {
  protected readonly routes = inject(Router).config;
}
