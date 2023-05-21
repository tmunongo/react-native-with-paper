import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import AuthProvider from "./src/context/AuthProvider";
import AppNavigator from "./src/navigators";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
