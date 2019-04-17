import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Filtro } from '../model/filtro';

@Component({
  selector: 'app-filtro-cad',
  templateUrl: './filtro-cad.page.html',
  styleUrls: ['./filtro-cad.page.scss'],
})
export class FiltroCadPage implements OnInit {

  private descricao: string; 
  private id: string; 

  constructor(private apiService: NossaGeladaApiService,
              private activeRoute: ActivatedRoute,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao'); 
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  cadastrarFiltro() {
    let filtro = new Filtro(this.descricao); 

    if (this.id == null) {
      this.apiService.cadastrarFiltro(filtro)
      .then((response)=>{
        console.log(this.id);
      })
      .catch((response)=>{
        console.log(this.id);
      });  
    }else{
      filtro.id = this.id;  

      this.apiService.atualizarFiltro(filtro)
      .then((response)=>{
        console.log('Funcionou, Atualizando');
      })
      .catch((response)=>{
        console.log('Não Funcionou, Atualizando');
      });  
    }
  }

}
