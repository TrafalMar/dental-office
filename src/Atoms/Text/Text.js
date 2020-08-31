import React from "react";
import styles from "./Text.module.css";

function Text(props) {
  const { children, fontSize, bold } = props;

  let inlineStyles = { fontSize: `${fontSize}rem` };
  if (bold) {
    inlineStyles = { ...inlineStyles, fontWeight: "bold" };
  }

  return (
    <span className={styles.Text} style={{ ...inlineStyles }}>
      {children}
    </span>
  );
}

export default Text;
