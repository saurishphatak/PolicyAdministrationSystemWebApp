import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerBusinessParentComponent } from './consumer-business-parent/consumer-business-parent.component';

const routes: Routes = [
  { path: "consumerBusiness", component: ConsumerBusinessParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
