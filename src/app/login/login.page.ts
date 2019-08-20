import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder} from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin;

  constructor(private privateNavController : NavController, private formBuilder:FormBuilder) { 
    this.formularioLogin = this.formBuilder.group({
      email: "",
      password: ""
    });
   }


  login(dadosLogin) {
    console.log(dadosLogin);
    //alert("click");
    //this.privateNavController.navigateForward("/tabs");
  }

}
