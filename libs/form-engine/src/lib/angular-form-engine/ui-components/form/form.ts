import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-form',
  imports: [],
  template: `<p>form works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {}
