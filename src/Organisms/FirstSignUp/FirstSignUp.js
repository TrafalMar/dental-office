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
  const [formIsValid, setFormIsValid] = useState(false);
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
  }, [fields]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("isFormValid: ", formIsValid);
    trimFormData();
    if (formIsValid) {
      console.log("User are singing in...");
    }
  };

  const trimFormData = () => {
    let fieldsReadyToSubmit = { ...fields };
    Object.keys(fieldsReadyToSubmit).map(
      (key) => (fieldsReadyToSubmit[key] = fieldsReadyToSubmit[key].trim())
    );
    setFields(fieldsReadyToSubmit);
  };

  const validateHandler = () => {
    const passwordMin = 6;
    const passwordMax = 32;
    const errors = {};

    if (fields.fullname.length === 0 && touched.fullname) {
      errors["fullname"] = `Поле "ПІБ" не може бути порожнім`;
    } else if (!isOnlyLetters(fields.fullname) && touched.fullname) {
      errors["fullname"] = "ПІБ має містити лише";
    } else {
      errors["fullname"] = "";
    }

    if (fields.telephone.length === 0 && touched.telephone) {
      errors["telephone"] = `Поле "телефон" не може бути порожнім`;
    } else if (!isOnlyNumbers(fields.telephone) && touched.telephone) {
      errors["telephone"] = "Номер телефону має містити лише цифри";
    } else {
      errors["telephone"] = "";
    }

    if (fields.email.length === 0 && touched.email) {
      errors["email"] = `Поле "Електронна пошта" не може бути порожнім`;
    } else if (!isValidEmail(fields.email) && touched.email) {
      errors["email"] = "Ви ввели невірну пошту";
    } else {
      errors["email"] = "";
    }

    if (fields.password.length === 0 && touched.password) {
      errors["password"] = `Поле "Пароль" не може бути порожнім`;
    } else if (fields.password.length < passwordMin && touched.password) {
      errors[
        "password"
      ] = `Ви ввели закороткий пароль. Мінімальна довжина ${passwordMin} символів`;
    } else if (fields.password.length > passwordMax && touched.password) {
      errors[
        "password"
      ] = `Занадто довгий пароль. Максимальнальна довжина не повинна перевищувати ${passwordMax} символів`;
    } else {
      errors["password"] = "";
    }

    let isFormValid =
      Object.values(errors).filter((error) => error !== "").length === 0 &&
      Object.values(fields).filter((field) => field.length === 0).length === 0;
    console.log(errors);

    setFormIsValid(isFormValid);
    setErrors(errors);
  };

  function isOnlyNumbers(text) {
    let re = /^[0-9]*$/;
    return re.test(String(text).toLowerCase());
  }

  function isOnlyLetters(text) {
    let re = /^[a-zA-Z\s\u0400-\u04FF]*$/;
    return re.test(String(text).toLowerCase());
  }

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
    <form onSubmit={onSubmit} className={styles.FirstSignUp}>
      <Text fontSize={3.2} margin={"0 0 5rem 0"} bold>
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
