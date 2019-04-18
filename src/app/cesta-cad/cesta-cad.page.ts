import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { Estabelecimento } from '../model/estabelecimento';

@Component({
  selector: 'app-cesta-cad',
  templateUrl: './cesta-cad.page.html',
  styleUrls: ['./cesta-cad.page.scss'],
})
export class CestaCadPage implements OnInit {

  private estabelecimentos: Estabelecimento[];
  private estabelecimentoDesc: string;  

  constructor(private apiService: NossaGeladaApiService) { }

  ngOnInit() {
    this.getEstabelecimentos();  
  }

  getEstabelecimentos() {
    this.apiService.getEstabelecimentos()
    .then((respose)=>{
      this.estabelecimentos = JSON.parse(JSON.stringify(respose)); 
    })
    .catch((response)=>{
      console.log(response.toString()); 
    })

  }

  imprimirDesc() {
    console.log(this.estabelecimentoDesc); 

  }

}
