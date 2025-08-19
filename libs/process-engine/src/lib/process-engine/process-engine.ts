import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-process-engine',
  imports: [],
  template: `<p>ProcessEngine works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessEngine {}
