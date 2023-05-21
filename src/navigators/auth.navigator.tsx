import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "../screens/notauthenticated/LoginScreen";

type Props = {};

const Stack = createStackNavigator();

const AuthNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
