import { Link, useMatch } from "solid-app-router";
import { createEffect, createSignal, Match, Show, Switch } from "solid-js";
import styles from "./AppBar.module.css";
import Login from "./Login";

export type State = "logout" | "form" | "login";

const AppBar = () => {
  const [state, setState] = createSignal<State>("logout");
  const [user, setUser] = createSignal<string>("Anonymous");
  const match = useMatch(() => "");

  createEffect(() => {
    const authToken = sessionStorage.getItem("auth_token");
    if (authToken) {
      setState("login");
      setUser(sessionStorage.getItem("name") || "Unknown");
    }
  });

  const logOut = () => {
    sessionStorage.removeItem("auth_token");
    setState("logout");
  };

  const LoggedOut = () => {
    return (
      <div class={styles.app_bar_container}>
        <a onClick={() => setState("form")}>Log-in</a>{" "}
        <Link href="/register">Register</Link>
      </div>
    );
  };

  const LoggedIn = () => {
    return (
      <div class={styles.app_bar_container}>
        <div>{user()}</div>
        <a class={styles.log_in_button} onClick={logOut}>
          Log-out
        </a>
      </div>
    );
  };

  return (
    <div class={styles.app_bar}>
      {
        <Show when={!match()}>
          {
            <Link href="/" class={styles.bar_title}>
              Solid Crypto
            </Link>
          }
        </Show>
      }

      <Switch fallback={<LoggedOut />}>
        <Match when={state() === "form"}>
          <Login setState={setState} />
        </Match>
        <Match when={state() === "login"}>
          <LoggedIn />
        </Match>
      </Switch>
    </div>
  );
};

export default AppBar;
