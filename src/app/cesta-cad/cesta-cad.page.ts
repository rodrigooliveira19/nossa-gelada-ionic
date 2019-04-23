import { Component, OnInit } from '@angular/core';
import { NossaGeladaApiService } from '../nossa-gelada-api.service';
import { Estabelecimento } from '../model/estabelecimento';
import { CestaService } from '../cesta.service';
import { Cesta } from '../model/cesta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cesta-cad',
  templateUrl: './cesta-cad.page.html',
  styleUrls: ['./cesta-cad.page.scss'],
})
export class CestaCadPage implements OnInit {

  private estabelecimentos: Estabelecimento[];
  private estabelecimentoDesc: string;  
  private descricao: string;  
  private estabelecimento: string;  
  private id: string; 

  constructor(private apiService: NossaGeladaApiService, 
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEstabelecimentos();
    this.descricao = this.activeRoute.snapshot.paramMap.get('descricao'); 
    this.id = this.activeRoute.snapshot.paramMap.get('id'); 
    this.estabelecimento = this.activeRoute.snapshot.paramMap.get('estabelecimento');  
  }

  cadastrarCesta() {
    let cesta = new Cesta(); 
    
    if(this.id == null) {
      cesta.descricao = this.descricao; 
      cesta.estabelecimento = this.estabelecimentoDesc; 

      this.apiService.cadastrarCesta(cesta)
     .then(()=>{console.log('Cesta cadastrada com sucesso')})
     .catch(()=>{console.log('Não foi possivel cadastrar a cesta'+cesta.estabelecimento)}); 
    }else {
      cesta.id = this.id; 
      cesta.descricao = this.descricao; 
      cesta.estabelecimento = this.estabelecimento; 

      this.apiService.atualizarCesta(cesta)
     .then(()=>{console.log('Cesta atualizada com sucesso'+cesta.estabelecimento)})
     .catch(()=>{console.log('Não foi possivel atualizar a cesta'+cesta.descricao)});

    }
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



}
