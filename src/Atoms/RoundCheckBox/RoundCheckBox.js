import React from "react";
import styles from "./RoundCheckBox.module.css";

function RoundCheckBox(props) {
  const { title, onClick, checked } = props;

  return (
    <label className={styles.Container}>
      {title}
      <input type="checkbox" onChange={onClick} checked={checked} />
      <span className={styles.Checkbox}></span>
    </label>
  );
}

export default RoundCheckBox;
