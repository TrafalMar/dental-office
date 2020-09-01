import React from "react";
import styles from "./App.module.css";

import InputField from "./Atoms/InputField/InputField";
import RoundCheckBox from "./Atoms/RoundCheckBox/RoundCheckBox";
import Text from "./Atoms/Text/Text";
import TransparentButton from "./Atoms/TransparentButton/TransparentButton";
import RoundedButton from "./Atoms/RoundedButton/RoundedButton";
import TabLine from "./Atoms/TabLine/TabLine";
import PlayButton from "./Atoms/PlayButton/PlayButton";
import AuthPage from "./Pages/AuthPage/AuthPage";
import FirstSignUp from "./Organisms/FirstSignUp/FirstSignUp";

function App() {
  return (
    <div className={styles.App}>
      {/* <Text fontSize={3.2} bold>
        Авторизація
      </Text>
      <InputField placeholder="Електронна пошта" />
      <InputField placeholder="Пароль" />
      <RoundCheckBox title={"Запам'ятати мене"} />
      <TransparentButton>
        <Text fontSize={1.3}>Забули пароль?</Text>
      </TransparentButton>
      <RoundedButton text="Увійти" />
      <TabLine fill />
      <TabLine /> */}
      {/* <PlayButton /> */}

      {/* <FirstSignUp /> */}

      {/* PAGES */}

      <AuthPage />
    </div>
  );
}

export default App;
