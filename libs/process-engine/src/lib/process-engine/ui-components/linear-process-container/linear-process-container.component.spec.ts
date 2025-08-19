import { TestBed } from '@angular/core/testing';
import { LinearProcessContainerComponent } from './linear-process-container.component';
import { ProcessService } from '../../process.service';

describe('LinearProcessContainerComponent', () => {
  let component: LinearProcessContainerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinearProcessContainerComponent],
      providers: [ProcessService],
    });

    const fixture = TestBed.createComponent(LinearProcessContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
