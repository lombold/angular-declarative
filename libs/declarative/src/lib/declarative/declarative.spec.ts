import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Declarative } from './declarative';

describe('Declarative', () => {
  let component: Declarative;
  let fixture: ComponentFixture<Declarative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Declarative],
    }).compileComponents();

    fixture = TestBed.createComponent(Declarative);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
