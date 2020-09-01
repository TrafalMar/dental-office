import React from "react";
import styles from "./SuggestSection.module.css";

import Text from "../../Atoms/Text/Text";
import TransparentButton from "../../Atoms/TransparentButton/TransparentButton";

function SuggestSection(props) {
  const { textBefore, buttonText, onClick } = props;
  return (
    <div className={styles.SuggestSection}>
      <Text fontSize={1.5}>{textBefore}</Text>
      <TransparentButton onClick={onClick}>
        <Text fontSize={1.5} margin={"0 0 0 1rem"} bold>
          {buttonText}
        </Text>
      </TransparentButton>
    </div>
  );
}

export default SuggestSection;
