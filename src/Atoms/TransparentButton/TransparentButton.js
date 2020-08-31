import React from "react";
import styles from "./TransparentButton.module.css";

function TransparentButton(props) {
  const { children, onClick } = props;
  return (
    <span className={styles.TB} onClick={onClick}>
      {children}
    </span>
  );
}

export default TransparentButton;
