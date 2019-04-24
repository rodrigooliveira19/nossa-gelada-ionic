import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { Cesta } from '../model/cesta';
import { ActivatedRoute } from '@angular/router';
import { ItemCesta } from '../model/itemcesta';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  private cestas: Cesta[]; 
  private itens: ItemCesta[]; 
  private cesta: Cesta; 

  private id : string; 
  private descricao: string; 
  private estabelecimento : string; 

  constructor(private apiService: NossaGeladaApiService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCestas(); 
    this.id = this.activeRoute.snapshot.paramMap.get('id');  
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao');  
    this.estabelecimento = this.activeRoute.snapshot.paramMap.get('estabelecimento');  
  }

  getCestas() {
    this.apiService.getCestas()
    .then((respose)=>{
      this.cestas = JSON.parse(JSON.stringify(respose)); 
      this.buscarCesta(); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    })
  }

  buscarCesta(){
    let cesta : Cesta;
    for (let index = 0; index < this.cestas.length; index++) {
      cesta = this.cestas[index]; 
      if(this.id == this.cestas[index].id) {
        this.cesta = this.cestas[index]; 
        this.itens = this.cestas[index].itens; 
        this.ordenar(); 
        break; 
      } 
    }
  }

  ordenar() {
    let auxItem: ItemCesta; 

    for (let i = 0; i < this.itens.length - 1; i++) {
      let ml = this.itens[i].unidade.split(" "); 
      let mlInt = Number(ml[0]); 
      let precoMl = (this.itens[i].valor/mlInt); 

      for (let j = i + 1; j < this.itens.length; j++) {
        let mlj = this.itens[j].unidade.split(" "); 
        let mlIntj = Number(mlj[0]); 
        let precoMlj = (this.itens[j].valor/mlIntj);

        if(precoMl > precoMlj) {
          auxItem = this.itens[i]; 
          this.itens[i] =  this.itens[j]; 
          this.itens[j] = auxItem; 
        }
        
      } 
   }

  }

}
