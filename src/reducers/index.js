import { combineReducers } from "redux";
import recipeReducer from "./reducer_recipes";
import fantasyReducer from './reducer_fantasy';
import navbarReducer from './reducer_navbar';
import productReducer from './reducer_products';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  form: formReducer,
  fantasy: fantasyReducer,
  activeItem: navbarReducer,
  products: productReducer
});

export default rootReducer;
