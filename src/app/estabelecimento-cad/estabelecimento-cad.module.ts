import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentoCadPage } from './estabelecimento-cad.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentoCadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstabelecimentoCadPage]
})
export class EstabelecimentoCadPageModule {}
