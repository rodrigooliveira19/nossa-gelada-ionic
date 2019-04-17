import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnidadeCadPage } from './unidade-cad.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadeCadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnidadeCadPage]
})
export class UnidadeCadPageModule {}
