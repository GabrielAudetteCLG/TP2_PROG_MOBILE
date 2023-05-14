import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Stack, ListItem, Avatar, Button } from "@react-native-material/core";
import Constants from "../Constants";
import { logout } from "../services/userService";
import { getAdminData } from "../data/userData";
import { getLastMessages } from "../services/messageService";
console.log("Load in inbox.js");

// import { getDatabase, ref, onValue, off } from "firebase/database";
// import { db } from "../config/firebaseConfig";

export default function Inbox({ navigation, route }) {
  console.log("route", route);
  console.log("route params", route.params);
  console.log("route params user", route.params.user);
  const [userData, setUserData] = useState(route.params.user);
  const [lastMessages, setLastMessages] = useState([]);
  if (route.params && route.params.user) {
    setUserData(route.params.user);
  }
  useEffect(() => {
    const fetchLastMessages = async () => {
      console.log("UserData", userData);
      if (userData) {
        const messages = await getLastMessages(userData.localId);
        setLastMessages(messages);
      }
    };
    fetchLastMessages();
  }, []);

  const signOutUser = async () => {
    await logout();
    navigation.navigate("Login");
  };

  const goToDiscussions = async () => {
    const adminData = await getAdminData();

    navigation.navigate("Discussions", {
      userData,
      recipientData: adminData,
    });
  };

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <View>
        {lastMessages.map((message) => {
          return (
            <ListItem
              onPress={() => {
                navigation.navigate("Discussions", {
                  withUser: fromUser(message),
                });
              }}
              leadingMode="avatar"
              leading={
                <Avatar
                  color={Constants.primary}
                  image={require("../assets/avatardefault.png")}
                />
              }
              title={fromUser(message).displayName}
              secondaryText={`${message.content.substring(0, 30)}...`}
            />
          );
        })}
      </View>
      {lastMessages.length === 0 &&
        userData &&
        userData.email !== adminData.email && (
          <View style={{ margin: 32 }}>
            <Button
              title="Débuter la discussion"
              color={Constants.primary}
              tintColor={"white"}
              onPress={() => goToDiscussions()}
            />
          </View>
        )}
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
});
