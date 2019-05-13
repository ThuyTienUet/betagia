import * as firebase from "firebase";
import _ from "lodash";
import { FETCH_PRODUCTS, FETCH_PRODUCT} from "./types";
import config from "../config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const database = firebase.database();

export function fetchProducts() {
  return dispatch => {
    database.ref("/Products").on("value", snapshot => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: snapshot.val()
      });
    });
  };
}

export function addProduct(product, callback) {
  return dispatch =>
    database
      .ref("/Products")
      .push(product)
      .then(() => callback());
}

export function deleteProduct(key) {
  return dispatch =>
    database
      .ref("/Products")
      .child(key)
      .remove();
}

export function fetchProduct(id) {
  return dispatch => {
    database.ref(`/Products/${id}`).on("value", snapshot => {
      dispatch({
        type: FETCH_PRODUCT,
        payload: snapshot.val()
      });
    });
  };
}

export function setNavbarActiveItem(tab) {
  return dispatch => {
    let newActiveItem = {
      activeItem: tab
    }

    dispatch({
      type: SET_NAVBAR_ACTIVE_ITEM,
      payload: newActiveItem
    })
  }
}
