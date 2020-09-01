import React from "react";
import styles from "./AuthPage.module.css";
import LoginForm from "../../Organisms/LoginForm/LoginForm";
import FirstSignUp from "../../Organisms/FirstSignUp/FirstSignUp";
import PlayButton from "../../Atoms/PlayButton/PlayButton";

function LoginPage(props) {
  return (
    <div className={styles.AuthPage}>
      <div className={styles.AuthSection}>
        {/* <LoginForm /> */}
        <FirstSignUp />
      </div>
      <div className={styles.Video}>
        <PlayButton />
      </div>
    </div>
  );
}

export default LoginPage;
