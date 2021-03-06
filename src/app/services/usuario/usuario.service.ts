import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlObjetos: string = "http://10.131.45.42/casaAberta/objetos/";

  constructor(private http: HttpClient) { }

  login(dados : any){
    return this.http.post(this.urlObjetos + "obj_usuario.php", dados)
  }

  cadastrarNovoUsuario(dados : any){
    
    return this.http.post( this.urlObjetos + "obj_usuario_insert.php", dados)
  }
}
