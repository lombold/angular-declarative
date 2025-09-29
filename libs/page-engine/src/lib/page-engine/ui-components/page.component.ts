import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'article',
  template: ` <h1>{{ title | async }}</h1> `,
  imports: [AsyncPipe],
})
export class PageComponent {
  readonly pageData = inject(ActivatedRoute).data;
  protected readonly title = this.pageData.pipe(map((p) => p['title']));
}
