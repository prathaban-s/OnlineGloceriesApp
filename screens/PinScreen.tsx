import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

const PinScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Text style={styles.headerText}>Enter your 4-digit pin</Text>
          <Text style={styles.inputLabel}>Code</Text>
          <TextInput
            style={styles.input}
            placeholder="- - - -"
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Button title="Next" radius="lg" size="lg" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PinScreen;

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
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 3,
    alignItems: "center",
  },
});
