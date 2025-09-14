import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ADForm } from '../../form.type';
import { ToForm } from '../../form-value.type';

type TestForm = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

describe('Form', () => {
  let component: FormComponent<TestForm, ADForm<TestForm>, ToForm<TestForm>>;
  let fixture: ComponentFixture<FormComponent<TestForm, ADForm<TestForm>, ToForm<TestForm>>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent<TestForm, ADForm<TestForm>, ToForm<TestForm>>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
