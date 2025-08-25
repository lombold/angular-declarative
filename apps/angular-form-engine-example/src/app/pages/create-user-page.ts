import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-user-page',
  imports: [],
  template: `<p>create-user-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPage {}
