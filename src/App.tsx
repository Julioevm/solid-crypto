import { Component, lazy } from "solid-js";

import styles from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import { useRoutes } from "solid-app-router";

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
