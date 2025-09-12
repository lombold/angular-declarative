import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ADForm } from '../../form.type';
import { FormControl, FormGroup, isFormControl, isFormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToForm } from '../../form-value.type';
import { NgTemplateOutlet } from '@angular/common';
import { FormFieldComponent } from '../input/form-field.component';
import { ADFormField } from '../../input.type';

@Component({
  selector: 'ad-form',
  imports: [ReactiveFormsModule, NgTemplateOutlet, FormFieldComponent],
  templateUrl: './form.component.html',
  styles: `
      :host {
          display: block;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent<TValue, TADForm extends ADForm<TValue>, TForm extends ToForm<TValue>> {
  public readonly form = input.required<TADForm>();
  public readonly formGroup = computed(() => this.mapToForm(this.form()));
  public readonly formSubmit = output<TValue>();

  mapToForm(form: TADForm): FormGroup<TForm> {
    const group = this.mapToFormGroup(form.fields);
    return new FormGroup(group);
  }

  private mapToFormGroup<TValue>(fields: ReadonlyArray<ADFormField<TValue, string>>) {
    const group: any = {};
    fields.map((field) => {
      if (field.type === 'group') {
        group[field.name] = this.mapToFormGroup(field.fields);
        return;
      }
      group[field.name] = new FormControl<typeof field.value>(field.value, {
        validators: field.validation?.additionalValidators,
        asyncValidators: field.validation?.additionalAsyncValidators,
      });
    });
    return group;
  }

  submit() {
    this.formSubmit.emit(this.formGroup().value as TValue);
  }

  protected readonly isFormControl = isFormControl;
  protected readonly isFormGroup = isFormGroup;
}
