import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DealerRegister } from './models/dealer-register';

@Component({
  selector: 'app-dealer-register',
  templateUrl: './dealer-register.component.html',
  styleUrls: ['./dealer-register.component.scss']
})
export class DealerRegisterComponent implements OnInit {
  registerDealer: FormGroup;
  dealer: DealerRegister
  public cpfMask = [ /[0-9]/, /[0-9]/, /[0-9]/, '.',/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/,'-', /[0-9]/, /[0-9]/]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.registerDealer = this.fb.group({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl('')
    })
  }

  public cadastrarRevendedor() {
    this.dealer = this.registerDealer.value

    console.log(this.registerDealer.get('cpf').value)

    console.log(this.dealer)
  }

}
