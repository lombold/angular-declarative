import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: ` <router-outlet />`,
  styles: ``,
})
export class App {
  protected title = 'angular-form-engine-example';
}
