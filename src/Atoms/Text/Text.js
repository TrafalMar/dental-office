import React from "react";
import styles from "./Text.module.css";

function Text(props) {
  const { children, fontSize, bold, color, margin } = props;

  let inlineStyles = { fontSize: `${fontSize}rem` };
  if (bold) {
    inlineStyles = { ...inlineStyles, fontWeight: "bold" };
  }
  if (color) {
    inlineStyles = { ...inlineStyles, color: color };
  }
  if (margin) {
    inlineStyles = { ...inlineStyles, margin: margin };
  }

  return (
    <span className={styles.Text} style={{ ...inlineStyles }}>
      {children}
    </span>
  );
}

export default Text;
