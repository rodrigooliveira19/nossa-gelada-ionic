import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { Marca } from '../model/marca';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-marca-cad',
  templateUrl: './marca-cad.page.html',
  styleUrls: ['./marca-cad.page.scss'],
})
export class MarcaCadPage implements OnInit {

  private descricao: string; 
  private id: string; 

  constructor(private apiService: NossaGeladaApiService,
              private activeRoute: ActivatedRoute,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao'); 
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.descricao); 
  }

  cadastrarMarca() {
    let marca = new Marca(this.descricao) ; 

    if (this.id == null) {
      this.apiService.cadastrarMarca(marca)
      .then((response)=>{
        console.log(this.id);
      })
      .catch((response)=>{
        console.log(this.id);
      });  
    }else{
      marca.id = this.id;  

      this.apiService.atualizarMarca(marca)
      .then((response)=>{
        console.log('Funcionou, Atualizando');
      })
      .catch((response)=>{
        console.log('Não Funcionou, Atualizando');
      });  
    }
  }

}
