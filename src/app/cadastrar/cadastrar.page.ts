import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage {

  formularioCadastrar: any;

  constructor(private navController: NavController, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.formularioCadastrar = this.formBuilder.group({
      email: "",
      senha: "",
      nome: ""
    });
  }


  cadastrar(dadosCadastro: any) {

    const formData = new FormData();
    formData.append("email", dadosCadastro.email);
    formData.append("senha", dadosCadastro.senha);
    formData.append("nome", dadosCadastro.nome);


    this.usuarioService.cadastrarNovoUsuario(formData).subscribe((dados: any) => {
      console.log(dados);

      if (dados.sucesso) {
        this.navController.navigateRoot("/");
      } else {
        alert("Erro no cadastro de usuario");
      }
    })

    console.log(dadosCadastro);
  }
}



