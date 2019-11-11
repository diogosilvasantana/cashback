import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DealerRegisterComponent } from './components/dealer-register/dealer-register.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseRegisterComponent } from './components/purchase-register/purchase-register.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TextMaskModule } from 'angular2-text-mask';
import {MatDividerModule} from '@angular/material/divider';
import { CurrencyMaskModule } from "ng2-currency-mask";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { SystemInfoComponent } from './components/system-info/system-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DealerRegisterComponent,
    PurchasesComponent,
    PurchaseRegisterComponent,
    SystemInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    CurrencyMaskModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [
    MatNativeDateModule,
     {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
