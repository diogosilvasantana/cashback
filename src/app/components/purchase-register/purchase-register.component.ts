import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PurchaseRegister } from './models/purchase-register';

@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.scss']
})
export class PurchaseRegisterComponent implements OnInit {
  registerPurchase: FormGroup;
  purchase: PurchaseRegister


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.registerPurchase = this.fb.group({
      codigo: new FormControl(''),
      valor: new FormControl(''),
      data: new FormControl(''),
    })
  }

  public cadastrarRevendedor() {
    this.purchase = this.registerPurchase.value;

    console.log(this.purchase)
  }

}
