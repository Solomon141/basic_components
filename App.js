import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import MainContainer from "./components/containers/MainContainer";

import SmallText from "./components/texts/SmallText";
import RegularText from "./components/texts/RegularText";
import BigText from "./components/texts/BigText";
import { useState } from "react";

import StyledTextInputs from "./components/inputs/StyledTextInputs";
import { colors } from "./components/colors";

import RegularButton from "./components/buttons/RegularButton";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <MainContainer style={{ justifyContent: "center" }}>
      <Text>Open up App.js to start working on your app!</Text>

      <SmallText>Small Text</SmallText>
      <RegularText>Regular Text</RegularText>
      <BigText>Big Text</BigText>

      <StyledTextInputs
        label="Email Address"
        placeholder="weymit2001@gmail.com"
        placeholderTextColor="white"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        icon="mail-outline"
        style={{ marginBottom: 25 }}
      />

      <StyledTextInputs
        label="Password"
        placeholder=" * * * * * * *"
        placeholderTextColor={colors.white}
        onChangeText={setPassword}
        value={password}
        icon="lock-closed"
        style={{ marginBottom: 25 }}
        secureTextEntry={hidePassword}
        hidePassword={hidePassword}
        setHidePassword={setHidePassword}
        isPassword={true}
      />

      <RegularButton onPress={() => {}}>Login</RegularButton>

      <StatusBar style="light" />
    </MainContainer>
  );
}
