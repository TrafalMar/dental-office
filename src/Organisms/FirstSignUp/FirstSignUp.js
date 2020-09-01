import React, { useState, useEffect } from "react";
import styles from "./FirstSignUp.module.css";

import Text from "../../Atoms/Text/Text";
import InputWithError from "../../Molecules/InputWithError/InputWithError";
import RoundCheckBox from "../../Atoms/RoundCheckBox/RoundCheckBox";
import TransparentButton from "../../Atoms/TransparentButton/TransparentButton";
import RoundedButton from "../../Atoms/RoundedButton/RoundedButton";
import SuggestSection from "../../Molecules/SuggestSection/SuggestSection";

function FirstSignUp(props) {
  // const [fullname, setFullname] = useState("");
  // const [telephone, setTelephone] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(null);
  const [signTheAgreement, setSignTheAgreement] = useState(false);

  const [fields, setFields] = useState({
    fullname: "",
    telephone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    telephone: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    fullname: false,
    telephone: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    validateHandler();
    console.log("Fields :", fields);
    console.log("Touched :", fields);
    console.log("Errors :", fields);
  }, [fields]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      console.log("User are singing in...");
    }
  };

  const validateHandler = () => {
    let isFormValid = true;

    if (fields.email.length === 0) {
      isFormValid = false;
    } else if (isValidEmail(fields.email)) {
      setErrors({ ...errors, email: "Ви ввели невірну пошту" });
      isFormValid = false;
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleChange = (e) => {
    let newFields = { ...fields };
    newFields[e.target.name] = e.target.value;
    setFields(newFields);
  };

  return (
    <form onSubmit={onSubmit} className={styles.LoginForm}>
      <Text fontSize={3.2} margin={"0 0 6rem 0"} bold>
        Реєстрація
      </Text>

      <InputWithError
        placeholder="ПІБ"
        name="fullname"
        onChange={(e) => {
          handleChange(e);
          setTouched({ ...touched, fullname: true });
        }}
        value={fields.fullname}
        error={errors.fullname}
      />
      <InputWithError
        name="telephone"
        placeholder="Телефон"
        onChange={(e) => {
          handleChange(e);
          setTouched({ ...touched, telephone: true });
        }}
        value={fields.telephone}
        error={errors.telephone}
      />

      <InputWithError
        name="email"
        placeholder="Електронна пошта"
        onChange={(e) => {
          handleChange(e);
          setTouched({ ...touched, email: true });
        }}
        value={fields.email}
        error={errors.email}
      />

      <InputWithError
        name="password"
        placeholder="Пароль"
        type="password"
        onChange={(e) => {
          handleChange(e);
          setTouched({ ...touched, password: true });
        }}
        value={fields.password}
        error={errors.password}
      />

      <div className={styles.InfoSection}>
        <RoundCheckBox
          title={"Я даю згоду на обробку моїх персональних даних"}
          checked={signTheAgreement}
          onClick={() => setSignTheAgreement(!signTheAgreement)}
        />
      </div>
      <RoundedButton text="Увійти" />

      <SuggestSection
        textBefore="Вже зареєстровані?"
        buttonText="Авторизуватись"
        onClick={() => {
          console.log("Link to register");
        }}
      />
    </form>
  );
}

export default FirstSignUp;
