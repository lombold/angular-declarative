import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ADForm, FormComponent } from '@lombold/angular-form-engine';
import { User } from './user';
import { PageComponent } from '../../../../libs/page-engine/src/lib/page-engine/ui-components/pages/page.component';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FormComponent, AsyncPipe],
  template: `
    @if (form$ | async; as form) {
    <ad-form [form]="form" (formSubmit)="saveUser($event)" />
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoFormComponent<TValue> extends PageComponent {
  public readonly value$ = this.pageData.pipe(map((p) => p['value'] as TValue));
  public readonly form$ = this.pageData.pipe(map((p) => p['form'] as ADForm<TValue>));

  saveUser(user: User) {
    alert(JSON.stringify(user));
  }
}
