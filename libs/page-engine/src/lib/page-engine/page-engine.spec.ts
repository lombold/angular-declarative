import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEngine } from './page-engine';

describe('PageEngine', () => {
  let component: PageEngine;
  let fixture: ComponentFixture<PageEngine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEngine],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEngine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
