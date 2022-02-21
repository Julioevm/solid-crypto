import { logEvent } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "solid-app-router";
import { createSignal } from "solid-js";
import { analytics } from "../Firebase/FirebaseConfig";
import styles from "./Form.module.css";

const Login = () => {
  const [name, setName] = createSignal<string>("");
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const navigate = useNavigate();
  const logIn = () => {};
  return (
    <>
      <header>
        <h1>Log into your account</h1>
      </header>
      <main>
        <form class={styles.large_form}>
          <input
            type="email"
            placeholder="Email..."
            onInput={(e: any) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onInput={(e: any) => setPassword(e.target.value)}
          />
          <button type="button" onClick={logIn}>
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
