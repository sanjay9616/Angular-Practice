import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "rxjs",
    component: LayoutComponent,
    loadChildren: () => import("./rxjs/rxjs.module").then(m => m.RxjsModule)
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
