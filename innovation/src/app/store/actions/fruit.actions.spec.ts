import * as fromFruits  from './fruit.actions';
import {EFruitActions} from "./fruit.actions";

describe('Fruits Actions', () => {
  describe('AddFruitToBasket action', () => {
    it('should dispatch an action', () => {
      const action = new fromFruits.AddFruitToBasket(1);
      expect({ ...action }).toEqual({
        type: EFruitActions.AddFruitToBasket,
        payload: 1
      });
    });
  });
});
