import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormWithTableComponent } from './form-with-table/form-with-table.component';
import { TableGpt4Component } from './table-gpt4/table-gpt4.component';
import { RetryPolicyComponent } from './retry-policy/retry-policy.component';

const routes: Routes = [
  { path: 'form-with-table', component: FormWithTableComponent },
  { path: 'table-gpt4', component: TableGpt4Component },
  { path: 'retry-policy', component: RetryPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
