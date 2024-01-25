import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CountryPicker from "react-native-country-picker-modal";
import { Button } from "@rneui/themed";
import * as Location from "expo-location";

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsyn();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const onClickNext = () => {
    navigation.navigate("Pin");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Text style={styles.headerText}>Enter your mobile number</Text>
          <Text style={styles.inputLabel}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <CountryPicker
              countryCode="IN"
              withFilter
              withFlag
              withAlphaFilter
              withCallingCodeButton
              withCallingCode
              containerButtonStyle={{
                marginRight: 4,
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Button title="Next" onPress={onClickNext} radius="lg" size="lg" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    color: "#181725",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
  },
  inputLabel: {
    color: "#7C7C7C",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 3,
    alignItems: "center",
  },
});
