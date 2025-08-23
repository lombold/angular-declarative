import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFormEngine } from './angular-form-engine';

describe('AngularFormEngine', () => {
  let component: AngularFormEngine;
  let fixture: ComponentFixture<AngularFormEngine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFormEngine],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularFormEngine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
