import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  imports: [],
  template: `<p>user-form works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserForm {}
