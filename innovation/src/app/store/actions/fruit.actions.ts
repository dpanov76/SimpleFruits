import { Action } from '@ngrx/store';
import { Fruit } from "../../fruits/fruits";

export enum EFruitActions {
  AddFruitToBasket = '[Fruit] Add Fruit To Basket',
  ChangeSortType = '[Fruit] Change sorting type',
  GetFruits = '[Fruit] Get Fruits',
  ShowFruit = '[Fruit] Get Fruit',
}

export class ChangeSortType implements Action {
  public readonly type = EFruitActions.ChangeSortType;
  constructor(public payload: string) {}
}

export class AddFruitToBasket implements Action {
  public readonly type = EFruitActions.AddFruitToBasket;
  constructor(public payload: number) {}
}

export class GetFruits implements Action {
  public readonly type = EFruitActions.GetFruits;
}

export class ShowFruit implements Action {
  public readonly type = EFruitActions.ShowFruit;
  constructor(public payload: Fruit) {}
}

export type FruitActions = GetFruits  | ShowFruit | AddFruitToBasket | ChangeSortType;
