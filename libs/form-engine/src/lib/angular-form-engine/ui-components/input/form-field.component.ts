import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ADFormControlField } from '../../input.type';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'ad-input',
  imports: [ReactiveFormsModule, KeyValuePipe],
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
  public readonly field = input.required<ADFormControlField<TValue, TName>>();
}
