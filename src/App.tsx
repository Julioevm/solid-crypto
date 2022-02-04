import { Component, lazy } from "solid-js";

import styles from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import { useRoutes } from "solid-app-router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWOrhkkZ8Rp9ZiSylQJXuo4qiD-2H04ls",
  authDomain: "solid-crypto.firebaseapp.com",
  projectId: "solid-crypto",
  storageBucket: "solid-crypto.appspot.com",
  messagingSenderId: "514188354466",
  appId: "1:514188354466:web:cbc727e7f4623291fc48fb",
  measurementId: "G-ZETFG854DQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const routes = [
  {
    path: "/coin/:id",
    component: lazy(() => import("./pages/coin/[id]")),
  },
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
];

const App: Component = () => {
  const user = { firstName: "John", lastName: "Doe" };
  const Routes = useRoutes(routes);

  return (
    <div class={styles.App}>
      <AppBar user={user} />
      <Routes />
    </div>
  );
};

export default App;
