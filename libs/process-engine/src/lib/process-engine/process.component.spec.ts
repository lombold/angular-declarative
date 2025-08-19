import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessComponent } from './process.component';
import { ProcessService } from './process.service';

describe('ProcessComponent', () => {
  let fixture: ComponentFixture<ProcessComponent<any, any>>;
  let component: ProcessComponent<any, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProcessComponent],
      providers: [ProcessService],
    });

    fixture = TestBed.createComponent(ProcessComponent);
    component = fixture.componentInstance;
  });

  it('should throw an NG0950 error if input is not provided', () => {
    expect(() => component.ngAfterViewInit()).toThrowError(/NG0950/);
  });
});
