import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  const { onChange, placeholder, value, type, name } = props;
  return (
    <input
      className={styles.InputField}
      onChange={onChange}
      type={type ? type : "text"}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default InputField;
