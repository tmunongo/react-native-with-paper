import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import AuthContext from "../../context/AuthContext";

type Props = {};

const HomeScreen = (props: Props) => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome Home, Authenticated One</Text>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
