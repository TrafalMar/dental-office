import React from "react";
import InputField from "./Atoms/InputField/InputField";
import RoundCheckBox from "./Atoms/RoundCheckBox/RoundCheckBox";
import Text from "./Atoms/Text/Text";
import TransparentButton from "./Atoms/TransparentButton/TransparentButton";
import RoundedButton from "./Atoms/RoundedButton/RoundedButton";
function App() {
  return (
    <div>
      <InputField placeholder="Електронна пошта" />
      <InputField placeholder="Пароль" />
      <RoundCheckBox title={"Запам'ятати мене"} />
      <TransparentButton>
        <Text fontSize={1.3}>Забули пароль?</Text>
      </TransparentButton>
      <RoundedButton text="Увійти" />
    </div>
  );
}

export default App;
