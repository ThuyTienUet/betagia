import * as firebase from "firebase";
import _ from "lodash";
import { FETCH_ACCOUNTS} from "./types";
import config from "../config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
const database = firebase.database();

export function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)      
}

export function fetchAccounts() {
    return dispatch => {
      database.ref("/Accounts").on("value", snapshot => {
        dispatch({
          type: FETCH_ACCOUNTS,
          payload: snapshot.val()
        });
      });
    };
  }