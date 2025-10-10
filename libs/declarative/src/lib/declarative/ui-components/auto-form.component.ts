import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ADForm, FormComponent } from '@lombold/angular-form-engine';
import { map, switchMap, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageComponent } from '@lombold/angular-page-engine';
import { SubmitFunction } from '../application-extensions';

@Component({
  selector: 'ad-auto-form',
  imports: [ReactiveFormsModule, FormComponent, AsyncPipe],
  template: `
    @if (form$ | async; as form) {
    <ad-form [form]="form" (formSubmit)="submit($event)" />
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
  public readonly submitFn$ = this.pageData.pipe(map((p) => p['submitFn'] as SubmitFunction<TValue>));

  private readonly injector = inject(EnvironmentInjector);
  private readonly destroyRef = inject(DestroyRef);

  submit(value: TValue) {
    this.submitFn$
      .pipe(
        take(1),
        takeUntilDestroyed(this.destroyRef),
        switchMap((fn) => {
          return runInInjectionContext(this.injector, () => fn(value));
        }),
      )
      .subscribe();
  }
}
