import { Component, OnInit } from '@angular/core';
import { Cesta } from '../model/cesta';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cesta-list',
  templateUrl: './cesta-list.page.html',
  styleUrls: ['./cesta-list.page.scss'],
})
export class CestaListPage implements OnInit {

  private cestas : Cesta[]; 

  constructor(private apiService: NossaGeladaApiService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.getCestas(); 
  }

  getCestas () { 
    this.apiService.getCestas()
    .then((response)=>{
      this.cestas = JSON.parse(JSON.stringify(response)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    }); 
  }

  adicinarCesta() {
    this.navCtrl.navigateForward('cesta-cad'); 
  }

  adicinarItem(cesta: Cesta) {
    this.navCtrl.navigateForward(['/item-cad',cesta.id,cesta.descricao,cesta.estabelecimento]);
  }

  atualizarCesta(cesta: Cesta) {
    this.navCtrl.navigateForward(['/cesta-cad',cesta.id,cesta.descricao,cesta.estabelecimento]); 
  }

  excluirCesta(cesta: Cesta) {
    this.apiService.excluirCesta(cesta)
    .then((response)=>{
      console.log('exclusão realizada'); 
      this.getCestas(); 
    })
    .catch((response)=>{
      console.log('exclusão não realizada '+ cesta);  
    }); 
  }

}
