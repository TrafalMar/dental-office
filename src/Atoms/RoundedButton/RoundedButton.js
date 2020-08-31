import React from "react";
import styles from "./RoundedButton.module.css";

const RoundedButton = (props) => {
  const { text, onClick } = props;
  return (
    <button onClick={onClick} className={styles.RoundedButton}>
      {text}
    </button>
  );
};

export default RoundedButton;
