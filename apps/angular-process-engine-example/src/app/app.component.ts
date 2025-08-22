import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  template: `
    <nav>
      <h1>Welcome to this cool page!</h1>
    </nav>
    <main>
      <article>
        <router-outlet />
      </article>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  protected title = "angular-business-porcess-engine";
}
