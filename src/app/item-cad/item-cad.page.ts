import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { ActivatedRoute } from '@angular/router';
import { Marca } from '../model/marca';
import { Unidade } from '../model/unidade';
import { Filtro } from '../model/filtro';
import { NumericValueAccessor } from '@ionic/angular';
import { Cesta } from '../model/cesta';
import { ItemCesta } from '../model/itemcesta';

@Component({
  selector: 'app-item-cad',
  templateUrl: './item-cad.page.html',
  styleUrls: ['./item-cad.page.scss'],
})
export class ItemCadPage implements OnInit {

  private marcas: Marca[];
  private unidades: Unidade[];
  private filtros: Filtro[];

  private id: string; 
  private descricao : string; 
  private estabelecimento : string; 

  private marca : string; 
  private unidade : string; 
  private filtro: string;
  private valor: number;  


  constructor(private apiService: NossaGeladaApiService, 
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getMarcas(); 
    this.getFiltros(); 
    this.getUnidades(); 
    this.id = this.activeRoute.snapshot.paramMap.get('id');  
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao');  
    this.estabelecimento = this.activeRoute.snapshot.paramMap.get('estabelecimento');  
  }

  getMarcas() {
    this.apiService.getMarcas()
    .then((respose)=>{
      this.marcas = JSON.parse(JSON.stringify(respose)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    })

  }

  getUnidades() {
    this.apiService.getUnidades()
    .then((respose)=>{
      this.unidades = JSON.parse(JSON.stringify(respose)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    })

  }

  getFiltros() {
    this.apiService.getFiltros()
    .then((respose)=>{
      this.filtros = JSON.parse(JSON.stringify(respose)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    })

  }

  cadastrarItem() {
    let cesta = new Cesta();
    let item = new ItemCesta(); 

    cesta.id = this.id; 
    cesta.descricao = this.descricao; 
    cesta.estabelecimento = this.estabelecimento; 

    item.cesta_id= cesta; 
    item.marca = this.marca;
    item.unidade = this.unidade;
    item.filtro = this.filtro;
    item.valor = this.valor; 

    this.apiService.cadastrarItem(item)
    .then(()=>{console.log('Item atualizada com sucesso')})
    .catch(()=>{console.log('Não foi possível cadastrar o Item'+item.marca)}); 




  }

}
