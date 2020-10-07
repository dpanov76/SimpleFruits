import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {IFruitsState} from "../store/state/fruits.state";
import {ChangeSortType} from "../store/actions/fruit.actions";

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent implements OnInit {

  constructor(private store: Store<IFruitsState>) { }
  order: string;
  ngOnInit(): void {
    this.store.select('fruits').subscribe((data)=>{
      this.order = data['sortBy'];
    });
  }

  onSortChange(type){
    this.store.dispatch(new ChangeSortType(type));
  }

}
