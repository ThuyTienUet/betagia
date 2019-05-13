import _ from 'lodash';
import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCT
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return { ...state, ...action.payload };
    case DELETE_PRODUCT:
      return _.omit(state, action.payload);
    case FETCH_PRODUCT:
      return action.payload;
  }

  return state;
}
