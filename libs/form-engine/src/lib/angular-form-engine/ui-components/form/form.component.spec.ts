import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FormComponent } from './form.component';

// Define a minimal test form structure
interface TestForm {
  name: string;
}

const testFormInput = {
  title: 'Test Form',
  fields: [
    {
      name: 'name',
      type: 'control',
      value: 'Initial Name',
    },
  ],
  submitButtonText: 'Submit',
};

describe('FormComponent', () => {
  let component: FormComponent<TestForm, any, any>;
  let fixture: ComponentFixture<FormComponent<TestForm, any, any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent<TestForm, any, any>);
    component = fixture.componentInstance;
    // Provide the required input using a function
    fixture.componentRef.setInput('form', testFormInput);
    // Trigger change detection to compute the form group
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit form value on submit', () => {
    const spyEmit = vi.spyOn(component.formSubmit, 'emit');
    const formGroup = component.formGroup();
    // Update the FormControl value
    formGroup.get('name')?.setValue('Updated Name');
    fixture.detectChanges();
    // Trigger submit which should emit the updated form value
    component.submit();
    expect(spyEmit).toHaveBeenCalledWith({ name: 'Updated Name' });
  });
});
