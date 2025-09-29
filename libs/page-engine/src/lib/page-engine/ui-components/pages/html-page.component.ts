import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'html-page',
  template: `
    <h1>{{ title | async }}</h1>
    <article [innerHtml]="(pageData | async)!['html']"></article>
  `,
  imports: [AsyncPipe],
})
export class HtmlPageComponent {
  readonly pageData = inject(ActivatedRoute).data;
  protected readonly title = this.pageData.pipe(map((p) => p['title']));
}
