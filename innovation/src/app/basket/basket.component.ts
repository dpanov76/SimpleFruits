import { Component, OnInit } from '@angular/core';
import {IFruitsState} from "../store/state/fruits.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private store: Store<IFruitsState>) { }
  basketTotal: number;

  ngOnInit(): void {
    this.store.select('fruits').subscribe((data)=>{
      this.basketTotal = data['basketTotal'];
    });
  }

}
