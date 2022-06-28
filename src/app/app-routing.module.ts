import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPropertyParentComponent } from './business-property-parent/business-property-parent.component';
import { ConsumerBusinessParentComponent } from './consumer-business-parent/consumer-business-parent.component';
import { PolicyParentComponent } from './policy-parent/policy-parent.component';

const routes: Routes = [
  { path: "consumerBusiness", component: ConsumerBusinessParentComponent },
  { path: "businessProperty", component: BusinessPropertyParentComponent },
  { path: "policy", component: PolicyParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
