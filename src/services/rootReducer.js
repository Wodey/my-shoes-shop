import {combineReducers} from 'redux';
import productReducer from './productReducer/reducer';
import sortReducer from './sortReducer/reducer';
import priceLimitReducer from './priceLimitReducer/reducer';
import colorsReducer from './colorsReducer/reducer';
import brandsReducer from './brandsReducer/reducer';
import sizesReducer from './sizesReducer/reducer';
import userReducer from './userReducer/reducer';
import cartReducer from './cartReducer/reducer';

export default combineReducers({
  products: productReducer,
  sort: sortReducer,
  priceLimit: priceLimitReducer,
  colors: colorsReducer,
  brands: brandsReducer,
  sizes: sizesReducer,
  user: userReducer,
  cart: cartReducer
});
