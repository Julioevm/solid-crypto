import { Component, lazy } from "solid-js";

import styles from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import { useRoutes } from "solid-app-router";
import { firebaseConfig } from "./Firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
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
  {
    path: "/register",
    component: lazy(() => import("./pages/Register")),
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <div class={styles.App}>
      <AppBar />
      <Routes />
    </div>
  );
};

export default App;
