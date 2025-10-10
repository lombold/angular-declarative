import { Component, inject } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ad-header',
  template: ` <ad-nav [routes]="routes" /> `,
  imports: [NavigationComponent],
})
export class HeaderComponent {
  protected readonly routes = inject(Router).config;
}
