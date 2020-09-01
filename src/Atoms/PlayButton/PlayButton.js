import React from "react";
import styles from "./PlayButton.module.css";

function PlayButton(props) {
  return (
    <div className={styles.PlayButton}>
      <div className={styles.AnimationBlock}></div>
      <span className={styles.PlayArrow}></span>
    </div>
  );
}

export default PlayButton;
