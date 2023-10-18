// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARJ9rBTo_afjvVmvk6LonU2PwhACR54j8",
  authDomain: "technology-client-site.firebaseapp.com",
  projectId: "technology-client-site",
  storageBucket: "technology-client-site.appspot.com",
  messagingSenderId: "726541334711",
  appId: "1:726541334711:web:f2d6b459098a3e0214f532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);