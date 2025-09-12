import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ADFormField } from '../../input.type';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'ad-input',
  imports: [ReactiveFormsModule, KeyValuePipe, JsonPipe],
  templateUrl: './form-field.component.html',
  styles: `
      :host {
          display: block;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent<TValue, TName extends string> {
  public readonly control = input.required<FormControl<TValue>>();
  public readonly field = input.required<ADFormField<TValue, TName>>();
}
