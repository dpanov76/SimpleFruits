import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FruitsComponent} from "./fruits/fruits.component";
import {DetailsComponent} from "./fruits/details/details.component";

const routes: Routes = [
  {
    path: '',
    component: FruitsComponent
  },
  {
    path: 'product/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
