import { Component, inject } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  template: ` <lib-nav [routes]="routes" /> `,
  imports: [NavigationComponent],
})
export class HeaderComponent {
  protected readonly routes = inject(Router).config;
}
