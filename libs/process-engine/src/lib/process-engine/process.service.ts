import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ProcessButton } from "./process-button.type";

const NEXT_BUTTON: ProcessButton = {
  label: "Next",
  disabled: false,
};

const PREVIOUS_BUTTON: ProcessButton = {
  label: "Previous",
  disabled: false,
};

@Injectable()
export class ProcessService {
  private readonly next$$ = new Subject<void>();
  private readonly previous$$ = new Subject<void>();

  private readonly nextButton$$ = new BehaviorSubject<ProcessButton>({
    ...NEXT_BUTTON,
    onClick: () => {
      this.next();
    },
  });
  private readonly previousButton$$ = new BehaviorSubject<ProcessButton>({
    ...PREVIOUS_BUTTON,
    onClick: () => {
      this.previous();
    },
  });

  public next() {
    this.next$$.next();
  }

  public getNext() {
    return this.next$$.asObservable();
  }

  public previous() {
    this.previous$$.next();
  }

  public getPrevious() {
    return this.previous$$.asObservable();
  }

  public getNextButton() {
    return this.nextButton$$.asObservable();
  }

  public setNextButton(button: Partial<ProcessButton>) {
    this.nextButton$$.next({
      ...this.nextButton$$.value,
      ...button,
    });
  }

  public getPreviousButton() {
    return this.previousButton$$.asObservable();
  }

  public setPreviousButton(button: Partial<ProcessButton>) {
    this.previousButton$$.next({
      ...this.previousButton$$.value,
      ...button,
    });
  }
}
