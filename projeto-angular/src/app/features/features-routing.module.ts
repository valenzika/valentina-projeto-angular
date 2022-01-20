import { Component, NgModule } from '@angular/core';
import { async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'animal',
    pathMatch: 'full',
  },
  {
    path: 'animal',
    loadChildren: async() =>
    import('./animal/animal.module').then((m) => m.AnimalModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
