import React from "react";
import styles from "./LoginPage.module.css";
import LoginForm from "../../Organisms/LoginForm/LoginForm";
import PlayButton from "../../Atoms/PlayButton/PlayButton";

function LoginPage(props) {
  return (
    <div className={styles.LoginPage}>
      <div className={styles.AuthSection}>
        <LoginForm />
      </div>
      <div className={styles.Video}>
        <PlayButton />
      </div>
    </div>
  );
}

export default LoginPage;
