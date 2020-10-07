import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FruitComponent } from './fruit/fruit.component';
import { FruitsComponent } from "./fruits.component";
import { DetailsComponent } from './details/details.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    FruitsComponent,
    FruitComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class FruitsModule { }
