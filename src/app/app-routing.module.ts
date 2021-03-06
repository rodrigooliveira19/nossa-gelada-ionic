import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },

  { path: 'estabelecimento-cad', 
    loadChildren: './estabelecimento-cad/estabelecimento-cad.module#EstabelecimentoCadPageModule' 
  },
  { path: 'estabelecimento-list',
    loadChildren: './estabelecimento-list/estabelecimento-list.module#EstabelecimentoListPageModule'
  },
  { path: 'estabelecimento-cad/:id/:descricao', 
    loadChildren: './estabelecimento-cad/estabelecimento-cad.module#EstabelecimentoCadPageModule' 
  },
  { path: 'marca-cad', 
    loadChildren: './marca-cad/marca-cad.module#MarcaCadPageModule' 
  },
  { path: 'marca-cad/:id/:descricao', 
    loadChildren: './marca-cad/marca-cad.module#MarcaCadPageModule' 
  },
  { path: 'marca-list', 
    loadChildren: './marca-list/marca-list.module#MarcaListPageModule' },

  { path: 'unidade-cad', 
    loadChildren: './unidade-cad/unidade-cad.module#UnidadeCadPageModule' },
  
  { path: 'unidade-cad/:id/:descricao', 
    loadChildren: './unidade-cad/unidade-cad.module#UnidadeCadPageModule' },

  { path: 'unidade-list', 
    loadChildren: './unidade-list/unidade-list.module#UnidadeListPageModule' },

  { path: 'filtro-cad',
    loadChildren: './filtro-cad/filtro-cad.module#FiltroCadPageModule' },

  { path: 'filtro-cad/:id/:descricao',
     loadChildren: './filtro-cad/filtro-cad.module#FiltroCadPageModule' },

  { path: 'filtro-list', 
    loadChildren: './filtro-list/filtro-list.module#FiltroListPageModule' },

  { path: 'cesta-cad', 
    loadChildren: './cesta-cad/cesta-cad.module#CestaCadPageModule' },

  { path: 'cesta-cad/:id/:descricao/:estabelecimento', 
    loadChildren: './cesta-cad/cesta-cad.module#CestaCadPageModule' },

  { path: 'cesta-list', 
    loadChildren: './cesta-list/cesta-list.module#CestaListPageModule' },

  { path: 'item-cad', 
    loadChildren: './item-cad/item-cad.module#ItemCadPageModule' },

  { path: 'item-cad/:id/:descricao/:estabelecimento', 
    loadChildren: './item-cad/item-cad.module#ItemCadPageModule' },

  { path: 'item-list/:id/:descricao/:estabelecimento', 
    loadChildren: './item-list/item-list.module#ItemListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
