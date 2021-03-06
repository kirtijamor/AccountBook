import { BanksService } from './banks.service';
import { BanksBackendService } from './banks-backend.service';
import { ArInvoicesBackendService } from './ar-invoices-backend.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule,
  MatCheckboxModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatSortModule,
  MatPaginatorModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { ArInvoicesComponent } from './ar-invoices/ar-invoices.component';
import { ApBillsComponent } from './ap-bills/ap-bills.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';
import { NewArComponent } from './new-ar/new-ar.component';
import { NewApComponent } from './new-ap/new-ap.component';
import { GenerateReceiptComponent } from './generate-receipt/generate-receipt.component';
import { ArInvoicesService } from './ar-invoices.service';
import { ApBillsService } from './ap-bills.service';
import { ApBillsBackendService } from './ap-bills-backend.service';
import { BanksComponent } from './banks/banks.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CustomerQuickAddComponent } from './customer-quick-add/customer-quick-add.component';
import { VendorQuickAddComponent } from './vendor-quick-add/vendor-quick-add.component';
import { NewBankComponent } from './new-bank/new-bank.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';


const appRoutes: Routes = [
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'ar-invoices', component: ArInvoicesComponent },
  { path: 'ap-bills', component: ApBillsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'receipts', component: ReceiptsComponent },
  { path: 'payment-terms', component: PaymentTermsComponent },
  { path: 'generate-receipt', component: GenerateReceiptComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'vendors', component: VendorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    UserAdminComponent,
    ArInvoicesComponent,
    ApBillsComponent,
    PaymentsComponent,
    ReceiptsComponent,
    PaymentTermsComponent,
    NewArComponent,
    NewApComponent,
    GenerateReceiptComponent,
    BanksComponent,
    EmployeesComponent,
    CustomersComponent,
    VendorsComponent,
    CustomerQuickAddComponent,
    VendorQuickAddComponent,
    NewBankComponent,
    NewCustomerComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
// tslint:disable-next-line: deprecation
    HttpModule
    // PopupModule.forRoot()
  ],
  entryComponents: [NewArComponent, NewApComponent, NewBankComponent, NewCustomerComponent],
  providers: [
    ArInvoicesService,
    ApBillsService,
    ArInvoicesBackendService,
    ApBillsBackendService,
    BanksBackendService,
    BanksService,
    DatePipe    // to make service available to all components
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
