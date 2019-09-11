import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'displayPage',
    component: MenuPage,
    children: [
      {
        path: 'HomePage',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'BoatPage',
        loadChildren: '../boat/boat.module#BoatPageModule'
      },
      {
        path: 'PersonPage',
        loadChildren: '../person/person.module#PersonPageModule'
      },
      {
        path: 'PlanetPage',
        loadChildren: '../planet/planet.module#PlanetPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'displayPage/HomePage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
