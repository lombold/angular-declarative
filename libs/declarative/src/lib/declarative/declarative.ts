import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-declarative',
  imports: [],
  template: `<p>Declarative works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Declarative {}
