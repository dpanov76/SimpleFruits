import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IFruitsState} from "../../store/state/fruits.state";
import {Fruit} from "../fruits";
import {AddFruitToBasket} from "../../store/actions/fruit.actions";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private store: Store<IFruitsState>) { }
  fruit: Fruit;

  ngOnInit(): void {
    this.store.select('fruits').subscribe((data)=>{
      this.fruit = data['selectedFruit'];
    });
  }

  onAddToBasket(price) {
    this.store.dispatch(new AddFruitToBasket(price));
  }
}
