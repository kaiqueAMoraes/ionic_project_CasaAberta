import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin;

  constructor(private navController: NavController, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      email: "",
      password: ""
    });
  }


  login(dadosLogin: any) {

    const formData = new FormData();
    formData.append("email", dadosLogin.email);
    formData.append("senha", dadosLogin.password);

    this.usuarioService.login(formData).subscribe((data: any) => {
      console.log(data);

      if (data.sucesso) {
        this.navController.navigateForward("/home");
      }else{
        alert("Usuario não encontrado");
      }
    })

    console.log(dadosLogin);
    //alert("click");
    //this.privateNavController.navigateForward("/tabs");
  }

  cadastrar() {
    this.navController.navigateForward("/cadastrar");
  }

}
