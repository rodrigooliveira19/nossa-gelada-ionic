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
    loadChildren: './unidade-list/unidade-list.module#UnidadeListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
