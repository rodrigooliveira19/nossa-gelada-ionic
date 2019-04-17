import { Component, OnInit } from '@angular/core';
import { Unidade } from '../model/unidade';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.page.html',
  styleUrls: ['./unidade-list.page.scss'],
})
export class UnidadeListPage implements OnInit {

  private unidades : Unidade[]; 

  constructor(private apiService: NossaGeladaApiService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.getUnidades(); 
  }


  getUnidades() {
    this.apiService.getUnidades()
    .then((response)=>{
      this.unidades = JSON.parse(JSON.stringify(response)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    }); 
  }

  adicionarUnidade() {
    this.navCtrl.navigateForward('unidade-cad'); 
  }

  excluirUnidade(unidade: Unidade) {
    this.apiService.excluirUnidade(unidade)
    .then((response)=>{
      console.log('exclusão realizada'); 
      this.getUnidades(); 
    })
    .catch((response)=>{
      console.log('exclusão não realizada '+ unidade);  
    }); 
  }

  atualizarUnidade(unidade: Unidade) {
    this.navCtrl.navigateForward(['/unidade-cad',unidade.id,unidade.descricao]); 
  }

}
