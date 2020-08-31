import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  const { onChange, placeholder, value } = props;
  return (
    <input
      className={styles.InputField}
      onChange={onChange}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputField;
