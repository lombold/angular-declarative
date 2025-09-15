import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-page-engine',
  imports: [],
  templateUrl: './page-engine.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageEngine {}
