import { Link, useMatch } from "solid-app-router";
import { createEffect, createSignal, Match, on, Show, Switch } from "solid-js";
import { authToken } from "../../App";
import styles from "./AppBar.module.css";
import LoginForm from "./LoginForm";

export type State = "logout" | "form" | "login";

const AppBar = () => {
  const [state, setState] = createSignal<State>("logout");
  const [user, setUser] = createSignal<string>("Anonymous");
  const match = useMatch(() => "");

  createEffect(
    on(authToken, () => {
      if (authToken()) {
        setState("login");
        setUser(sessionStorage.getItem("name") ?? "Anonymous");
      }
    })
  );

  const logOut = () => {
    sessionStorage.removeItem("auth_token");
    setState("logout");
  };

  const LoggedOut = () => {
    return (
      <div class={styles.app_bar_container}>
        <a
          class={(styles.pointer, styles.login_button)}
          onClick={() => setState("form")}
        >
          Log-in
        </a>{" "}
        <Link class={styles.login_link} href="/login">
          Log-in
        </Link>
        <Link href="/register">Register</Link>
      </div>
    );
  };

  const LoggedIn = () => {
    return (
      <div class={styles.app_bar_container}>
        <div>{user()}</div>
        <a class={styles.pointer} onClick={logOut}>
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
          <LoginForm setState={setState} />
        </Match>
        <Match when={state() === "login"}>
          <LoggedIn />
        </Match>
      </Switch>
    </div>
  );
};

export default AppBar;
