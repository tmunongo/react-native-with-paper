import axios from "axios";
import Constants from "expo-constants";
import React, { useContext, useState } from "react";
import {
  Dimensions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import AuthContext from "../../context/AuthContext";

type Props = {};

const LoginScreen = (props: Props) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const API_URL = Constants.manifest?.extra?.API_URL;

  const submitLogin = () => {
    try {
      const userData = axios
        .post(
          `${API_URL}/login`,
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          login(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    event.preventDefault();
    setEmail(event.nativeEvent.text);
  };

  const handlePasswordChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    event.preventDefault();
    setPassword(event.nativeEvent.text);
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <View style={styles.loginForm}>
        <TextInput
          value={email}
          placeholder="example@gmail.com"
          label="Email"
          id="email"
          onChange={(event) => handleEmailChange(event)}
        />
        <TextInput
          id="password"
          value={password}
          label="Password"
          secureTextEntry={true}
          onChange={(event) => handlePasswordChange(event)}
        />
        <Button onPress={submitLogin}>Log In</Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginForm: {
    height: Dimensions.get("screen").height,
    flexDirection: "column",
  },
});
