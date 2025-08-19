import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessSummaryComponent } from './process-summary.component';
import { outputBinding } from '@angular/core';

describe('ProcessSummaryComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProcessSummaryComponent],
    });

  });

  it('should emit input as output', () => {

    let output = null;
    const fixture = TestBed.createComponent(ProcessSummaryComponent, {
      bindings: [
        outputBinding('output', (event) => {
          output = event;
        })
      ]
    });
    const value = { key: 'value' };

    fixture.componentRef.setInput('input', value);

    fixture.detectChanges();
    expect(output).toBe(value);
  });
});
