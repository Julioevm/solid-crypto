import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createSignal } from "solid-js";
import styles from "./AppBar.module.css";

const Login = () => {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const handleSubmit = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email(), password())
      .then((response) => {
        sessionStorage.setItem("auth_token", response.user.refreshToken);
        sessionStorage.setItem("email", response.user.email || "undefined");
        sessionStorage.setItem(
          "name",
          response.user.displayName || "undefined"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <div class={styles.app_bar_container}>
        <input
          type="email"
          placeholder="email..."
          onInput={(e: any) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password..."
          onInput={(e: any) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
