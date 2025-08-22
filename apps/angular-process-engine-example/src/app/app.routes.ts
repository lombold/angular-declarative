import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    loadComponent: () =>
      import("./pages/create-user-page/create-user-page.component").then(
        (m) => m.CreateUserPageComponent,
      ),
  },
];
