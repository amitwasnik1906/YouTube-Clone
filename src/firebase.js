import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmz3lsFbs3kyP79PP8vNWmMdZbZ5udkXY",
  authDomain: "yt-clone-amit.firebaseapp.com",
  projectId: "yt-clone-amit",
  storageBucket: "yt-clone-amit.appspot.com",
  messagingSenderId: "833672306380",
  appId: "1:833672306380:web:69f6ea7b451ca458d0ec69",
  measurementId: "G-RMGRPW5S25",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
