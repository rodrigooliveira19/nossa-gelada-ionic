import { Injectable } from '@angular/core';
import { Estabelecimento } from './model/estabelecimento';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marca } from './model/marca';

@Injectable({
  providedIn: 'root'
})
export class NossaGeladaApiService {

  private url = 'https://rodrigooliveira19.pythonanywhere.com/api_rest/'; 
  private auxUrl = null; 

  constructor(private http: HttpClient) { }

  getEstabelecimentos() {
    this.auxUrl = this.url + 'estabelecimentos/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get(this.auxUrl,{headers: headers}).toPromise(); 

  }

  cadastrarEstabelecimento(estabelecimento: Estabelecimento) {
    this.auxUrl = this.url + 'cadastrarEstabelecimento/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(this.auxUrl,estabelecimento,{headers: headers}).toPromise(); 
  }

  atualizarEstabelecimento(estabelecimento: Estabelecimento) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/atualizarEstabelecimento/"
      ,estabelecimento,{headers: headers}).toPromise(); 
  }

  excluirEstabelecimento(estabelecimento: Estabelecimento) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/excluirEstabelecimento/"
      ,estabelecimento,{headers: headers}).toPromise(); 
  }

  //Marca

  getMarcas() {
    this.auxUrl = this.url + 'marcas/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get(this.auxUrl,{headers: headers}).toPromise(); 

  }

  cadastrarMarca(marca: Marca) {
    this.auxUrl = this.url + 'cadastrarMarca/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(this.auxUrl,marca,{headers: headers}).toPromise(); 
  }

  atualizarMarca(marca: Marca) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/atualizarMarca/"
      ,marca,{headers: headers}).toPromise(); 
  }

  excluirMarca(marca: Marca) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/excluirMarca/"
      ,marca,{headers: headers}).toPromise(); 
  }

}
