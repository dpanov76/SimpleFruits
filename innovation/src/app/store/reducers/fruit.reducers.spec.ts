import * as fruits from './fruit.redusers';
import * as fruitsActions from '../actions/fruit.actions';
import * as initialState from "../state/fruits.state";

describe('FruitReducers', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialFruitState } = initialState;
      const action = {} as any;
      const state = fruits.fruitReducers(undefined, action);
      expect(state).toBe(initialFruitState);
    });
  });
  describe('AddFruitToBasket action', () => {
    it('should calculate total fruit price in basket', () => {
      const { initialFruitState } = initialState;
      let action = new fruitsActions.AddFruitToBasket(2);
      let state = fruits.fruitReducers(initialFruitState, action);
      expect(state.basketTotal).toEqual(2);
      action = new fruitsActions.AddFruitToBasket(3);
      state = fruits.fruitReducers(state, action);
      expect(state.basketTotal).toEqual(5); // 2 + 3 = 5
    });
  });
});
