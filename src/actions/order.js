import * as firebase from "firebase";
import _ from "lodash";
import { FETCH_ORDERS} from "./types";
import config from "../config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const database = firebase.database();

export function fetchOrders() {
  return dispatch => {
    database.ref("/Orders").on("value", snapshot => {
      dispatch({
        type: FETCH_ORDERS,
        payload: snapshot.val()
      });
    });
  };
}
