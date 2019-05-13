import { combineReducers } from "redux";
import orderReducer from "./reducer_orders";
import fantasyReducer from './reducer_fantasy';
import navbarReducer from './reducer_navbar';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  orders: orderReducer,
  form: formReducer,
  fantasy: fantasyReducer,
  activeItem: navbarReducer
});

export default rootReducer;
