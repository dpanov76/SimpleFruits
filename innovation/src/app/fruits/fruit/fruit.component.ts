import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {IFruitsState} from "../../store/state/fruits.state";
import {AddFruitToBasket, ShowFruit} from "../../store/actions/fruit.actions";
import {Fruit} from "../fruits";

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent {

  constructor(
    private store: Store<IFruitsState>,
    private router: Router
  ) { }

  @Input() fruit: Fruit;

  onFruitSelect(fruit): void {
    this.store.dispatch(new ShowFruit(fruit));
    this.router.navigate([`/product/${fruit.url}`]);
  }

  onAddToBasket(price): number {
    this.store.dispatch(new AddFruitToBasket(price));
    return price;
  }

  //TODO Can be static if it was reused somewhere else

  truncateString(str) {
    if (str.length <= 200) {
      return str
    }
    return str.slice(0, 200) + '...'
  }
}
