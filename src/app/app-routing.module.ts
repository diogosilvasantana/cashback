import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DealerRegisterComponent } from './components/dealer-register/dealer-register.component';
import { LoginComponent } from './components/login/login.component';
import { PurchaseRegisterComponent } from './components/purchase-register/purchase-register.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { SystemInfoComponent } from './components/system-info/system-info.component';


const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: 'painel', component: HomeComponent} ,
  { path: 'painel/cadastro-revendedor', component: DealerRegisterComponent},
  { path: 'painel/cadastrar-compra', component: PurchaseRegisterComponent},
  { path: 'painel/listar-compras', component: PurchasesComponent},
  { path: 'painel/informacoes-do-sistema', component: SystemInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
