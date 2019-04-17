import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Filtro } from '../model/filtro';

@Component({
  selector: 'app-filtro-list',
  templateUrl: './filtro-list.page.html',
  styleUrls: ['./filtro-list.page.scss'],
})
export class FiltroListPage implements OnInit {

  private filtros : Filtro[]; 
  
  constructor(private apiService: NossaGeladaApiService,
    private navCtrl: NavController, 
    private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.getFiltros(); 
  }

  getFiltros () { 
    this.apiService.getFiltros()
    .then((response)=>{
      this.filtros = JSON.parse(JSON.stringify(response)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    }); 
  }

  adicinarFiltro() {
    this.navCtrl.navigateForward('filtro-cad'); 
  }

  atualizarFiltro(filtro: Filtro) {
    this.navCtrl.navigateForward(['/filtro-cad',filtro.id,filtro.descricao]); 
  }

  excluirFiltro(filtro: Filtro) {
    this.apiService.excluirFiltro(filtro)
    .then((response)=>{
      console.log('exclusão realizada'); 
      this.getFiltros(); 
    })
    .catch((response)=>{
      console.log('exclusão não realizada '+ filtro);  
    }); 
  }

}
