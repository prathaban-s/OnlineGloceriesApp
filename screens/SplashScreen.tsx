import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../constants/colors";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../assets/icons/Group.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.fontLarge}>Nectar</Text>
          <Text style={styles.fontSmall}>Online groceriet</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SplashScreenBg,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 44,
    height: 44,
    marginRight: 6,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  fontLarge: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },
  fontSmall: {
    fontSize: 14,
    fontWeight: "200",
    color: "#fff",
  },
});
