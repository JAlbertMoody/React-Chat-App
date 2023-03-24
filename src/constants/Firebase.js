import { initializeApp } from "firebase/app";

const APIKEY = process.env.REACT_APP_API_KEY;
const AUTH = process.env.REACT_APP_AUTH;
const PROJID = process.env.REACT_APP_PROJECT_ID;
const BUCKET = process.env.REACT_APP_BUCKET;
const SENDER = process.env.REACT_APP_SENDER_ID;
const ID = process.env.REACT_APP_APP_ID


const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTH,
  projectId: PROJID,
  storageBucket: BUCKET,
  messagingSenderId: SENDER,
  appId: ID
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase;
