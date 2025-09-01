import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ADFormField } from '../../input.type';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ad-input',
  imports: [ReactiveFormsModule],
  template: `
    @switch (input().type) { @case ('text') {
    <input type="text" [placeholder]="input().placeholder" [formControl]="control()" />
    } @case ('number') {
    <input type="number" [placeholder]="input().placeholder" [formControl]="control()" />
    } @case ('email') {
    <input type="email" [placeholder]="input().placeholder" [formControl]="control()" />
    } @case ('password') {
    <input type="password" [placeholder]="input().placeholder" [formControl]="control()" />
    } @default {
    <div style="width: 200px; height: 50px; background-color: red; color: whitesmoke">NOT IMPLEMENTED</div>
    } }
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
