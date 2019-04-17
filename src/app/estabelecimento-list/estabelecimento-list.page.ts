import { Padrao } from './../model/padrao';
import { Estabelecimento } from './../model/estabelecimento';
import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-list',
  templateUrl: './estabelecimento-list.page.html',
  styleUrls: ['./estabelecimento-list.page.scss'],
})
export class EstabelecimentoListPage implements OnInit {

  private estabelecimentos : Estabelecimento[]; 

  constructor(private apiService: NossaGeladaApiService,
              private navCtrl: NavController,
              private router: Router, 
              private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.getEstabelecimentos(); 
  }

  getEstabelecimentos () { 
    this.apiService.getEstabelecimentos()
    .then((response)=>{
      this.estabelecimentos = JSON.parse(JSON.stringify(response)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    }); 
  }

  adicinarEstabelecimento() {
    this.navCtrl.navigateForward('estabelecimento-cad'); 
  }

  atualizarEstabelecimento(estabelecimento: Estabelecimento) {
    let id =  estabelecimento.id; 
    let descricao = estabelecimento.descricao; 
    console.log(estabelecimento.id);
    console.log(estabelecimento.descricao); 
    this.navCtrl.navigateForward(['/estabelecimento-cad',id,descricao]); 
    //this.router.navigate(['/estabelecimento-cad',estabelecimento.id,estabelecimento.descricao]); 
    //this.navCtrl.navigateForward(['/estabelecimento-cad',estabelecimento.id,estabelecimento.descricao]); 
  }

  excluirEstabelecimento(estabelecimento: Estabelecimento) {
    this.apiService.excluirEstabelecimento(estabelecimento)
    .then((response)=>{
      console.log('exclusão realizada'); 
      this.getEstabelecimentos(); 
    })
    .catch((response)=>{
      console.log('exclusão não realizada '+ estabelecimento);  
    }); 
  }
}
