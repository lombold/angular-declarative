import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  imports: [],
  template: `<p>This is a custom component!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {}
