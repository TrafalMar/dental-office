import React from "react";
import styles from "./RoundCheckBox.module.css";

function RoundCheckBox(props) {
  const { title, onChange, checked } = props;

  return (
    <label class={styles.Container}>
      {title}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span class={styles.Checkbox}></span>
    </label>
  );
}

export default RoundCheckBox;
