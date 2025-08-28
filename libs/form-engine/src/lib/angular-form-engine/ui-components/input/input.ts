import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-input',
  imports: [],
  template: `<p>input works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Input {}
