import { Injectable } from '@angular/core';
import { Estabelecimento } from './model/estabelecimento';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marca } from './model/marca';
import { Unidade } from './model/unidade';
import { Filtro } from './model/filtro';
import { Cesta } from './model/cesta';
import { ItemCesta } from './model/itemcesta';

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

    return this.http.get('http://127.0.0.1:8000/api_rest/estabelecimentos/'
      ,{headers: headers}).toPromise(); 

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

    return this.http.get('http://127.0.0.1:8000/api_rest/marcas/',{headers: headers}).toPromise(); 

  }

  cadastrarMarca(marca: Marca) {
    this.auxUrl = this.url + 'cadastrarMarca/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post('http://127.0.0.1:8000/api_rest/marcas/',marca,{headers: headers}).toPromise(); 
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

  //Unidade
  
  getUnidades() {
    this.auxUrl = this.url + 'unidades/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get('http://127.0.0.1:8000/api_rest/unidades/',{headers: headers}).toPromise(); 

  }

  cadastrarUnidade(unidade: Unidade) {
    this.auxUrl = this.url + 'cadastrarUnidade/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(this.auxUrl,unidade,{headers: headers}).toPromise(); 
  }

  atualizarUnidade(unidade: Unidade) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/atualizarUnidade/"
      ,unidade,{headers: headers}).toPromise(); 
  }

  excluirUnidade(unidade: Unidade) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/excluirUnidade/"
      ,unidade,{headers: headers}).toPromise(); 
  }

  //Filtro
  
  getFiltros() {
    this.auxUrl = this.url + 'filtros/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get('http://127.0.0.1:8000/api_rest/filtros/',{headers: headers}).toPromise(); 

  }

  cadastrarFiltro(filtro: Filtro) {
    this.auxUrl = this.url + 'cadastrarFiltro/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(this.auxUrl,filtro,{headers: headers}).toPromise(); 
  }

  atualizarFiltro(filtro: Filtro) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/atualizarFiltro/"
      ,filtro,{headers: headers}).toPromise(); 
  }

  excluirFiltro(filtro: Filtro) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://rodrigooliveira19.pythonanywhere.com/api_rest/excluirFiltro/"
      ,filtro,{headers: headers}).toPromise(); 
  }


  //Cestas

  getCestas() {
    
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get("http://127.0.0.1:8000/api_rest/cestas/"
      ,{headers: headers}).toPromise(); 

  }

  cadastrarCesta(cesta: Cesta) {

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post("http://127.0.0.1:8000/api_rest/cadastrarCesta/",
      cesta,{headers: headers}).toPromise(); 
  }

  atualizarCesta(cesta: Cesta) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://127.0.0.1:8000/api_rest/atualizarCesta/"
      ,cesta,{headers: headers}).toPromise(); 
  }

  excluirCesta(cesta: Cesta) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://127.0.0.1:8000/api_rest/excluirCesta/"
      ,cesta,{headers: headers}).toPromise(); 
  }


  //Item
  
  getItens() {
    
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get("http://127.0.0.1:8000/api_rest/cestas/"
      ,{headers: headers}).toPromise(); 

  }

  cadastrarItem(item: ItemCesta) {

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post("http://127.0.0.1:8000/api_rest/cadastrarItem/",
      item,{headers: headers}).toPromise(); 
  }

  atualizarItem(item: ItemCesta) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://127.0.0.1:8000/api_rest/atualizarCesta/"
      ,item,{headers: headers}).toPromise(); 
  }

  excluirCestItem(item: ItemCesta) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 

    return this.http.post("http://127.0.0.1:8000/api_rest/excluirCesta/"
      ,item,{headers: headers}).toPromise(); 
  }

}
