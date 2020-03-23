import {combineReducers} from 'redux';
import productReducer from './productReducer/reducer';
import sortReducer from './sortReducer/reducer';
import priceLimitReducer from './priceLimitReducer/reducer';

export default combineReducers({
  products: productReducer,
  sort: sortReducer,
  priceLimit: priceLimitReducer
});