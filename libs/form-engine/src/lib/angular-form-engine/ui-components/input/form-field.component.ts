import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ADFormField } from '../../input.type';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'ad-input',
  imports: [ReactiveFormsModule, KeyValuePipe],
  template: `
    @let formField = input(); @switch (formField.type) { @case ('text') {
    <input type="text" [placeholder]="formField.placeholder" [formControl]="control()" />
    } @case ('number') {
    <input type="number" [placeholder]="formField.placeholder" [formControl]="control()" />
    } @case ('email') {
    <input type="email" [placeholder]="formField.placeholder" [formControl]="control()" />
    } @case ('password') {
    <input type="password" [placeholder]="formField.placeholder" [formControl]="control()" />
    } @case ('select') {
    <select [formControl]="control()">
      @for (option of formField.options; track option) {
      <option [value]="option.value">{{ option.label }}</option>
      }
    </select>
    } @default {
    <div style="width: 200px; height: 50px; background-color: red; color: whitesmoke">NOT IMPLEMENTED</div>
    } }
    <div>
      @for (error of control().errors | keyvalue; track error.key) {
      <span style="color: red">{{ error.key }}</span>
      }
    </div>
  `,
  styles: `
      :host {
          display: block;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent<TValue, TName extends string> {
  public readonly control = input.required<FormControl<TValue>>();
  public readonly input = input.required<ADFormField<TValue, TName>>();
}
