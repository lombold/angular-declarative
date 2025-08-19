import { Directive, HostListener, inject } from "@angular/core";
import { ProcessService } from "../process.service";

@Directive({
  selector: "[appNextStep]",
})
export class NextStepDirective {
  private readonly processService = inject(ProcessService);

  @HostListener("click")
  onClick(): void {
    this.processService.next();
  }
}
