import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { Stack, ListItem, Avatar } from "@react-native-material/core";
import Constants from "../Constants";
import { addUser } from "../services/userService";

export default function Inscription({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [cellulaire, setCellulaire] = useState("");
  const userInfos = [
    { name: "Nom", value: name },
    { name: "email", value: email },
    { name: "password", value: password },
    { name: "confirmation", value: confirmation },
    { name: "cellulaire", value: cellulaire },
  ];

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          fontSize: "20",
        }}
      >
        Restez connecté avec vos proches
      </Text>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          placeholderTextColor="black"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="black"
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmation"
          placeholderTextColor="black"
          onChangeText={(text) => setConfirmation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cellulaire"
          placeholderTextColor="black"
          onChangeText={(text) => setCellulaire(text)}
        />
        <Pressable
          title="Inscription"
          style={styles.button}
          onPress={() => {
            addUser(userInfos);
            console.log(JSON.stringify(userInfos.map((info) => info.value)));
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Inscription
          </Text>
        </Pressable>
      </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    paddingTop: 50,
    alignContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    color: "black",
    backgroundColor: "lightgrey",
    fontSize: 18,
  },
  button: {
    marginTop: 50,
    height: 40,
    width: "80%",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "teal",
    color: "black",
    alignSelf: "center",
  },
});
