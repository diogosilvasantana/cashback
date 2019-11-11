import { Component, OnInit } from '@angular/core';
import { Purchases } from './models/purchases';

const ELEMENT_DATA: Purchases[] = [
  {codigo: 1, valor: 45.69, data: '31/05/2019', cashbackPorcentagem: 5, valorCashback: 9.87, status: 'Em Validação'} ,
  {codigo: 2, valor: 648.69, data: '15/08/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Aprovado'} ,
  {codigo: 3, valor: 465.69, data: '31/09/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Reprovado'} ,
  {codigo: 4, valor: 35.69, data: '31/09/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Em Validação'} ,
  {codigo: 5, valor: 84.69, data: '10/10/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Em Validação'} ,
  {codigo: 6, valor: 763.69, data: '12/10/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Reprovado'} ,
  {codigo: 7, valor: 557.69, data: '17/10/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Aprovado'} ,
  {codigo: 8, valor: 34.69, data: '27/10/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Em Validação'} ,
  {codigo: 9, valor: 966.69, data: '01/11/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Aprovado'} ,
  {codigo: 10, valor: 632.69, data: '02/11/2019', cashbackPorcentagem: 0.6, valorCashback: 9.87, status: 'Em Validação'} 
  
];

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'valor', 'data', 'porcentagem', 'cashback', 'status', 'acoes'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
