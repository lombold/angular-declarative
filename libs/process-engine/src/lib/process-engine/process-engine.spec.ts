import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessEngine } from './process-engine';

describe('ProcessEngine', () => {
  let component: ProcessEngine;
  let fixture: ComponentFixture<ProcessEngine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessEngine],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessEngine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
