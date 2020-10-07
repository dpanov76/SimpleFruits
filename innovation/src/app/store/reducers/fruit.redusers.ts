import { IFruitsState, initialFruitState} from "../state/fruits.state";
import { EFruitActions, FruitActions} from "../actions/fruit.actions";

export const fruitReducers = (
  state = initialFruitState,
  action: FruitActions
): IFruitsState => {
  switch (action.type) {
    case EFruitActions.GetFruits: {
      return {
        ...state
      };
    }
    case EFruitActions.ShowFruit: {
      return {
        ...state,
        selectedFruit: action.payload
      };
    }
    case EFruitActions.AddFruitToBasket: {
      // Use do round here to avoid JS float calculations 0.000000003 or something
      let basketTotal = Math.round((state.basketTotal + action.payload) * 100) / 100;
      return {
        ...state,
        basketTotal: basketTotal
      };
    }
    case EFruitActions.ChangeSortType: {
      const sorted = [...state.fruits];
      if(action.payload == 'price'){
        sorted.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
      }
      if(action.payload == 'alphabetic'){
        sorted.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      }
      return {
        ...state,
        fruits: sorted,
        sortBy: action.payload
      };
    }
    default:
      return state;
  }
};
