import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBGZpIez2k5ScB9aDU4DvamD-0BUPtwObs",
  authDomain: "top-crown-clothing.firebaseapp.com",
  projectId: "top-crown-clothing",
  storageBucket: "top-crown-clothing.appspot.com",
  messagingSenderId: "872659923273",
  appId: "1:872659923273:web:9b0da0eab3f9d3bbcfaa98",
  measurementId: "G-5X1NZX87EL"
}

const app = initializeApp(firebaseConfig);
export default app;