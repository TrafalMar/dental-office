import React from "react";
import InputField from "./../../Atoms/InputField/InputField";
import Text from "./../../Atoms/Text/Text";
import styles from "./InputWithError.module.css";

function InputWithError(props) {
  const { placeholder, onChange, error, value, type, name } = props;
  return (
    <div className={styles.InputWithError}>
      <InputField
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
      />

      <Text fontSize={1.5} margin={"0 2rem"} color={"red"}>
        {error ? error : ""}
      </Text>
    </div>
  );
}

export default InputWithError;
