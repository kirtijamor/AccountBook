import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '' , component: ArInvoicesComponent},
  // {path: 'banks' , loadChildren: '../app/ar-invoices/ar-invoices.module#ArInvoicesModule'},
  // {path: 'employees' , loadChildren: '../app/ar-invoices/ar-invoices.module#ArInvoicesModule'},
  // {path: 'customers' , loadChildren: '../app/ar-invoices/ar-invoices.module#ArInvoicesModule'},
  // {path: '' , redirectTo: '' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
