import { Show } from "solid-js";
import styles from "./AppBar.module.css";

interface User {
  firstName: string;
  lastName: string;
}

const AppBar = (props: { user: User }) => {
  return (
    <div className={styles.app_bar}>
      <Show
        when={props.user}
        fallback={<div className={styles.log_in_button}>Log-in</div>}
      >
        {(user) => (
          <>
            <div className={styles.user_name}>{user.firstName}</div>
            <div className={styles.log_in_button}>Log-out</div>
          </>
        )}
      </Show>
    </div>
  );
};

export default AppBar;
