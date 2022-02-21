import { logEvent } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createSignal } from "solid-js";
import { analytics } from "../Firebase/FirebaseConfig";

export const useLogin = (email: string, password: string): boolean => {
  const [isLoginSuccessful, setIsLoginSuccessful] = createSignal(false);
  const authentication = getAuth();
  signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      sessionStorage.setItem("auth_token", response.user.refreshToken);
      sessionStorage.setItem("email", response.user.email || "undefined");
      sessionStorage.setItem("name", response.user.displayName || "undefined");
    })
    .catch((error) => {
      console.log(error);
    });

  setIsLoginSuccessful(true);
  logEvent(analytics, "login", {
    email: email,
  });

  return isLoginSuccessful();
};
