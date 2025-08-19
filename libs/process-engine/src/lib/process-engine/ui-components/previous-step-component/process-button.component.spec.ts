import { TestBed } from '@angular/core/testing';
import { ProcessButtonComponent } from './process-button.component';
import { inputBinding, signal } from '@angular/core';

describe('ProcessButtonComponent', () => {
  let component: ProcessButtonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProcessButtonComponent],
    });

    const fixture = TestBed.createComponent(ProcessButtonComponent, {
      bindings: [inputBinding('button', signal({ label: 'Test', disabled: false }))]
    });
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    const fixture = TestBed.createComponent(ProcessButtonComponent, {
      bindings: [inputBinding('button', signal({ label: 'Test', disabled: false }))]
    });
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent.trim()).toBe('Test');
  });
});
