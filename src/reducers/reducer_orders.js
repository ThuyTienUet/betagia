import _ from 'lodash';
import {
  FETCH_RECIPE,
  CREATE_RECIPE,
  DELETE_RECIPE,
  FETCH_ORDERS
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RECIPE:
      return action.payload;
    case CREATE_RECIPE:
      return { ...state, ...action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    case FETCH_ORDERS:
      return action.payload;
  }
  return state;
}
