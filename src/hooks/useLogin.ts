import { logEvent } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setAuthToken } from "../App";
import { analytics } from "../Firebase/FirebaseConfig";

export const useLogin = (email: string, password: string): boolean => {
  let isLoginSuccessful = false;
  const authentication = getAuth();
  signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      setAuthToken(response.user.refreshToken);
      sessionStorage.setItem("email", response.user.email || "undefined");
      sessionStorage.setItem("name", response.user.displayName || "undefined");
    })
    .catch((error) => {
      console.log(error);
    });

  isLoginSuccessful = true;
  logEvent(analytics, "login", {
    email: email,
  });

  return isLoginSuccessful;
};
