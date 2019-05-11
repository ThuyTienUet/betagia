import * as firebase from "firebase";
import _ from "lodash";
import { FETCH_PRODUCTS, FETCH_PRODUCT} from "./types";
import config from "../config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
// firebase.initializeApp(config);
const database = firebase.database();


export function isLogged() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          return true
        } else {
          return false
        }
      });
  }
export function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    // .then((user) => {
    //     console.log(user);
        
    // })
    // .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorMessage);
        
    //     return errorMessage
    //     // ...
    //   })
      
}