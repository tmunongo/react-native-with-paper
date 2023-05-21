import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthNavigator from "./auth.navigator";

import AuthContext from "../context/AuthContext";
import MainNavigator from "./main.navigator";

type Props = {};

const Stack = createStackNavigator();

const index = (props: Props) => {
  let { user } = useContext(AuthContext);

  return user ? <MainNavigator /> : <AuthNavigator />;
};

export default index;

const styles = StyleSheet.create({});
