import { Component, lazy } from "solid-js";

import styles from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import { useRoutes } from "solid-app-router";
import { createStorageSignal } from "@solid-primitives/storage";

export const [authToken, setAuthToken] = createStorageSignal<
  string | null,
  undefined
>("auth_token", null, {
  api: sessionStorage,
});

export const [favList, setFavList] = createStorageSignal<
  string | null,
  undefined
>("favList", null, {
  api: localStorage,
});

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
  {
    path: "/login",
    component: lazy(() => import("./pages/Login")),
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
