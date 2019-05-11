import { FETCH_FANTASY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FANTASY:
      // console.log(action.payload);
      return action.payload;
  }
  return state;
}
