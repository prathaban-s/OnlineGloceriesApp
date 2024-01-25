import React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const onClickGetStarted = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/images/login-bg.jpeg")}
      >
        <View style={styles.innerContainer}>
          <Image source={require("../assets/icons/Group.png")} />
          <Text style={styles.welcomeText}>Welcome {"\n"} to our store</Text>
          <Text style={styles.subTitle}>Get your groceries quickly</Text>
          <Button
            radius="lg"
            size="lg"
            title="Get Started"
            titleStyle={styles.titleStyle}
            onPress={onClickGetStarted}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    objectFit: "fill",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 40,
    gap: 20,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "#fcfcfc",
    opacity: 0.7,
  },
  titleStyle: {
    width: "100%",
    textAlign: "center",
  },
});
