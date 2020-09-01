import React from "react";
import styles from "./TabLine.module.css";

function TabLine(props) {
  const { onClick, fill } = props;

  const style = [styles.TabLine];
  if (fill) {
    style.push(styles.Fill);
  }

  return <span onClick={onClick} className={style.join(" ")}></span>;
}

export default TabLine;
