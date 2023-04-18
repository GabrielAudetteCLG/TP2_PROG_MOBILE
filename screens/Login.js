import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Stack, TextInput, Button } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { login } from "../services/userService";
import Constants from "../Constants";

export default function Login(props) {
  const navigation = props.navigation;
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticate = async () => {
    // if (checkEmail(email) && checkPassword(password)) {
    //   const user = await login(email, password);
    //   userInfos = JSON.stringify(user);
    //   console.log(`UserInfos (Login page)`, userInfos);
    //   console.log(`UserInfos non JSON.stringify (Login page)`, user);
    // navigation.navigate("Inbox", {
    //   userData: userInfos,
    // });
    // } else {
    //   setErrorMessage("Email ou Mot de passe incorrect!");
    // }
    navigation.navigate("Inbox");
  };
  const checkEmail = (email) => {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };
  const checkPassword = (password) => {
    var regex = /\S{5}/;
    return regex.test(password);
  };
  return (
    <Stack spacing={2} style={{ margin: 8 }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/icon-chat-app-text.png")}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      </View>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="email" {...props} />
          )}
        />
        <TextInput
          label="Mot de passe"
          secureTextEntry
          value={password}
          autoComplete="email"
          onChangeText={(text) => setPassword(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="form-textbox-password" {...props} />
          )}
        />
        <Button
          title="Me connecter"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={authenticate}
        />
      </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 35,
  },
  actionBox: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    color: Constants.primary,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
