// test: add complete tests for FormComponent with parameterized test cases
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from '../form/form.component';
import { ADForm } from '../../form.type';
import { FormGroup } from '@angular/forms';
import { ToForm } from '../../form-value.type';

type TestForm = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

describe('FormComponent', () => {
  let component: FormComponent<TestForm, ADForm<TestForm>, ToForm<TestForm>>;
  let fixture: ComponentFixture<FormComponent<TestForm, ADForm<TestForm>, ToForm<TestForm>>>;

  const dummyForm: ADForm<TestForm> = {
    fields: [
      { name: 'name', type: 'text', label: 'Name', value: 'John Doe', placeholder: 'Enter name' },
      { name: 'age', type: 'number', label: 'Age', value: 30 },
      {
        name: 'address',
        type: 'group',
        fields: [
          { name: 'street', type: 'text', label: 'Street', value: '123 Main St', placeholder: 'Enter street' },
          { name: 'city', type: 'text', label: 'City', value: 'Anytown', placeholder: 'Enter city' },
        ],
      },
    ],
    title: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    // Provide required form input
    fixture.componentRef.setInput('form', dummyForm);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build formGroup with all controls', () => {
    const fg = component.formGroup();
    expect(fg).instanceof(FormGroup);
    expect(fg.contains('name')).toBeTruthy();
    expect(fg.contains('age')).toBeTruthy();
    expect(fg.contains('address')).toBeTruthy();
    const addressGroup = fg.get('address') as FormGroup;
    expect(addressGroup.contains('street')).toBeTruthy();
    expect(addressGroup.contains('city')).toBeTruthy();
  });

  it('should initialize form controls with correct default values', () => {
    const fg = component.formGroup();
    expect(fg.get('name')?.value).toBe('John Doe');
    expect(fg.get('age')?.value).toBe(30);
    const addressGroup = fg.get('address') as FormGroup;
    expect(addressGroup.get('street')?.value).toBe('123 Main St');
    expect(addressGroup.get('city')?.value).toBe('Anytown');
  });

  // Parameterized tests for updating control values
  const testCases = [
    { fieldPath: ['name'], newValue: 'Alice' },
    { fieldPath: ['age'], newValue: 42 },
    { fieldPath: ['address', 'street'], newValue: '456 Oak St' },
    { fieldPath: ['address', 'city'], newValue: 'Othertown' },
  ];

  testCases.forEach(({ fieldPath, newValue }) => {
    it(`should update control value for ${fieldPath.join('.')}`, () => {
      const fg = component.formGroup();
      const control = fg.get(fieldPath);
      expect(control).toBeTruthy();
      control?.setValue(newValue);
      expect(control?.value).toEqual(newValue);
    });
  });

  it('should emit form value on submit', () => {
    vi.spyOn(component.formSubmit, 'emit');
    const fg = component.formGroup();
    fg.get('name')?.setValue('Test Name');
    fg.get('age')?.setValue(99);
    const addressGroup = fg.get('address') as FormGroup;
    addressGroup.get('street')?.setValue('Test Street');
    addressGroup.get('city')?.setValue('Test City');
    component.submit();
    expect(component.formSubmit.emit).toHaveBeenCalledWith({
      name: 'Test Name',
      age: 99,
      address: {
        street: 'Test Street',
        city: 'Test City',
      },
    });
  });
});
