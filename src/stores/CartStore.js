import { types } from 'mobx-state-tree';

export const CartStore = types.model({
  totalQuantity: 0,
  loading: false,
});
