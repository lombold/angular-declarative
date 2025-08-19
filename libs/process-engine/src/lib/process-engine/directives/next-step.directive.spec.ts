import { TestBed } from '@angular/core/testing';
import { NextStepDirective } from './next-step.directive';
import { ProcessService } from '../process.service';

describe('NextStepDirective', () => {
  let directive: NextStepDirective;
  let processService: ProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessService, NextStepDirective],
    });

    directive = TestBed.inject(NextStepDirective);
    processService = TestBed.inject(ProcessService);
  });

  it('should call next on ProcessService when clicked', () => {
    const nextSpy = vi.spyOn(processService, 'next');
    directive.onClick();
    expect(nextSpy).toHaveBeenCalled();
  });
});
