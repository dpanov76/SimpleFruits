import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/internal/Observable";
import {IFruitsState} from "../store/state/fruits.state";
import {Fruit} from "./fruits";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  constructor(private store: Store<IFruitsState>) { }
  public fruitsState: Observable<Fruit[]>;

  ngOnInit(): void {
   this.fruitsState = this.store.select('fruits');
  }

}
