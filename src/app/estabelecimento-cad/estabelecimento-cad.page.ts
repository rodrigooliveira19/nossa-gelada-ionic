import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../model/estabelecimento';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-cad',
  templateUrl: './estabelecimento-cad.page.html',
  styleUrls: ['./estabelecimento-cad.page.scss'],
})
export class EstabelecimentoCadPage implements OnInit {

  private descricao: string; 
  private id : string; 

  private estabelecimento = Estabelecimento;  
  

  constructor(private apiService: NossaGeladaApiService, 
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao'); 
    this.id = this.activeRoute.snapshot.paramMap.get('id');  
  
  }

  cadastrarEstabelecimento() {
    let estabelecimento = new Estabelecimento(this.descricao); 

    if (this.id == null) {
      this.apiService.cadastrarEstabelecimento(estabelecimento)
      .then((response)=>{
        console.log(this.id);
      })
      .catch((response)=>{
        console.log(this.id);
      });  
    }else{
      estabelecimento.id = this.id;  

      this.apiService.atualizarEstabelecimento(estabelecimento)
      .then((response)=>{
        console.log('Funcionou, Atualizando');
      })
      .catch((response)=>{
        console.log('Não Funcionou, Atualizando');
      });  
    }
  }

}
