import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOperatorComponent } from './of-operator/of-operator.component';

const routes: Routes = [
  {
    path: "of-operator",
    component: OfOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
