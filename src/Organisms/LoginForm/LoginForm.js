import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";

import Text from "../../Atoms/Text/Text";
import TransparentButton from "../../Atoms/TransparentButton/TransparentButton";
import InputWithError from "../../Molecules/InputWithError/InputWithError";
import RoundCheckBox from "../../Atoms/RoundCheckBox/RoundCheckBox";
import RoundedButton from "../../Atoms/RoundedButton/RoundedButton";
import SuggestSection from "../../Molecules/SuggestSection/SuggestSection";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [formIsValid, setFormIsValid] = useState(null);
  const [remindMe, setRemindMe] = useState(false);

  useEffect(() => {
    console.log(remindMe);
    setFormIsValid(validateHandler());
  }, [email, password]);

  // const { onSubmit } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      console.log("User are singing in...");
    }
  };

  const validateHandler = () => {
    let formIsValid = true;

    if (!isValidEmail(email) && emailTouched) {
      setEmailError("Ви ввели невірну пошту");
      formIsValid = false;
    } else if (email.length === 0) {
      formIsValid = false;
    } else {
      setEmailError(null);
    }

    return formIsValid;
  };

  function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <form onSubmit={onSubmit} className={styles.LoginForm}>
      <Text fontSize={3.2} margin={"0 0 5rem 0"} bold>
        Авторизація
      </Text>
      <InputWithError
        placeholder="Електронна пошта"
        onChange={(e) => {
          setEmail(e.target.value.trim());
          setEmailTouched(true);
        }}
        value={email}
        error={emailError}
      />

      <InputWithError
        placeholder="Пароль"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value.trim());
          setPasswordTouched(true);
        }}
        value={password}
        error={passwordError}
      />

      <div className={styles.InfoSection}>
        <RoundCheckBox
          title={"Запам'ятати мене"}
          checked={remindMe}
          onClick={() => setRemindMe(!remindMe)}
        />
        <TransparentButton>
          <Text fontSize={1.3}>Забули пароль?</Text>
        </TransparentButton>
      </div>
      <RoundedButton text="Увійти" />
      <SuggestSection
        textBefore="Ще не зареєстровані?"
        buttonText="Зареєструватись"
        onClick={() => {
          console.log("Link to authentication");
        }}
      />
    </form>
  );
}

export default LoginForm;
