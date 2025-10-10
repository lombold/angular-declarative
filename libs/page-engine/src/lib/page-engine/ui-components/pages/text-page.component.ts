import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'ad-text-page',
  template: `
    <h1>{{ title | async }}</h1>
    <article class="show-linebreaks">
      <p>{{ (pageData | async)!['text'] }}</p>
    </article>
  `,
  styles: ['.show-linebreaks { white-space: pre-line; }'],
  imports: [AsyncPipe],
})
export class TextPageComponent {
  readonly pageData = inject(ActivatedRoute).data;
  protected readonly title = this.pageData.pipe(map((p) => p['title']));
}
