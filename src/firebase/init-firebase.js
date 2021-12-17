import {initializeApp} from 'firebase/app'

const fireBaseConfig = {
  apiKey: "AIzaSyBOAulKuz0s6m1BkJyktCBPpcnXXj8dFoc",
  authDomain: "crown-ecommerce-20a39.firebaseapp.com",
  projectId: "crown-ecommerce-20a39",
  storageBucket: "crown-ecommerce-20a39.appspot.com",
  messagingSenderId: "495691166003",
  appId: "1:495691166003:web:8b23f75d4b471e3db30e46",
  measurementId: "G-76SP68N04B"
}

const app = initializeApp(fireBaseConfig);
export default app;