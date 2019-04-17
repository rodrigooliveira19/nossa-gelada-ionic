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
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
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
    loadChildren: './marca-list/marca-list.module#MarcaListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
