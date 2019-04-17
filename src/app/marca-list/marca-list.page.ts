import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.page.html',
  styleUrls: ['./marca-list.page.scss'],
})
export class MarcaListPage implements OnInit {

  private marcas : Marca[]; 

  constructor(private apiService: NossaGeladaApiService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.getMarcas(); 
  }
  
  getMarcas() {
    this.apiService.getMarcas()
    .then((response)=>{
      this.marcas = JSON.parse(JSON.stringify(response)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    }); 
  }

  adicionarMarca() {
    this.navCtrl.navigateForward('marca-cad'); 
  }

  excluirMarca(marca: Marca) {
    this.apiService.excluirMarca(marca)
    .then((response)=>{
      console.log('exclusão realizada'); 
      this.getMarcas(); 
    })
    .catch((response)=>{
      console.log('exclusão não realizada '+ marca);  
    }); 
  }

  atualizarMarca(marca: Marca) {
    this.navCtrl.navigateForward(['/marca-cad',marca.id,marca.descricao]); 
  }

}
