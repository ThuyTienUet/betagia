import * as firebase from "firebase";
import _ from "lodash";
import { FETCH_PRODUCTS, FETCH_PRODUCT} from "./types";
import config from "../config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
const database = firebase.database();

export function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)      
}