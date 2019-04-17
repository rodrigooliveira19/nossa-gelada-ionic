import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { Unidade } from '../model/unidade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unidade-cad',
  templateUrl: './unidade-cad.page.html',
  styleUrls: ['./unidade-cad.page.scss'],
})
export class UnidadeCadPage implements OnInit {

  private descricao: string;
  private id: string; 

  constructor(private apiService: NossaGeladaApiService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao'); 
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  cadastrarUnidade() {
    let unidade = new Unidade(this.descricao); 

    if (this.id == null) {
      this.apiService.cadastrarUnidade(unidade)
      .then((response)=>{
        console.log(this.descricao);
      })
      .catch((response)=>{
        console.log(this.descricao);
      });  
    }else{
      unidade.id = this.id;  

      this.apiService.atualizarUnidade(unidade)
      .then((response)=>{
        console.log('Funcionou, Atualizando');
      })
      .catch((response)=>{
        console.log('Não Funcionou, Atualizando');
      });  
    }
  }

}
