import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { useEffect, useState } from "react";
import RouteScreen from "./screens/RouteScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, createTheme } from "@rneui/themed";

export default function App() {
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isSplash ? (
          <SplashScreen />
        ) : (
          // <SafeAreaProvider>
          // <SafeAreaView style={{ flex: 1 }}>
          // <StatusBar style="auto" />
          <RouteScreen />
          // </SafeAreaView>
          // </SafeAreaProvider>
        )}
      </ThemeProvider>
    </>
  );
}

const theme = createTheme({
  lightColors: {
    primary: "#53B175",
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});
