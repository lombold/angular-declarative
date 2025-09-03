import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ADForm } from '../../form.type';
import { FormControl, FormGroup, isFormControl, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../input/form-field.component';

@Component({
  selector: 'ad-form',
  imports: [ReactiveFormsModule, FormFieldComponent],
  template: `
    <h1>{{ form().title }}</h1>
    <form [formGroup]="formGroup()" (ngSubmit)="submit()">
      @for (field of form().fields; track field.name) { @if (formGroup().get(field.name); as formControl) { @if
      (isFormControl(formControl)) {
      <ad-input [control]="formControl" [input]="field" />
      } } }
      <button type="submit" [disabled]="formGroup().invalid">{{ form().submitButtonText || 'Submit' }}</button>
    </form>
  `,
  styles: `
      :host {
          display: block;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent<TValue, TForm extends ADForm> {
  public readonly form = input.required<TForm>();
  public readonly formGroup = computed(() => this.mapToFormGroup(this.form()));
  public readonly formSubmit = output<TValue>();

  mapToFormGroup(form: TForm) {
    const group: { [key: string]: FormControl<any> } = {};
    form.fields.map((field) => {
      group[field.name] = new FormControl<typeof field.value>(field.value, {
        validators: field.validation?.additionalValidators,
        asyncValidators: field.validation?.additionalAsyncValidators,
      });
    });
    return new FormGroup(group);
  }

  submit() {
    this.formSubmit.emit(this.formGroup().value as TValue);
  }

  protected readonly isFormControl = isFormControl;
}
