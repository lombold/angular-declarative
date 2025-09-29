import { Component } from '@angular/core';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'header',
  template: ` <lib-nav /> `,
  imports: [NavigationComponent],
})
export class HeaderComponent {}
