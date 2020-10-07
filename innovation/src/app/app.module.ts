import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FruitsModule } from './fruits/fruits.module';
import {StoreModule} from '@ngrx/store';
import {fruitReducers} from "./store/reducers/fruit.redusers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import { BasketComponent } from './basket/basket.component';
import { SorterComponent } from './sorter/sorter.component';


@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    SorterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsModule,
    NgbModule,
    StoreModule.forRoot({ fruits:fruitReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
