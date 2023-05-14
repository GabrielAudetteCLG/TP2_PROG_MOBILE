import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Stack, ListItem, Avatar, Button } from "@react-native-material/core";
import Constants from "../Constants";
import { logout } from "../services/userService";
import { getAdminData } from "../data/userData";
import { getLastMessages } from "../services/messageService";

export default function Inbox({ navigation, route }) {
  const [userData, setUserData] = useState(null);
  const [lastMessages, setLastMessages] = useState([]);

  useEffect(() => {
    if (route.params && route.params.user) {
      setUserData(route.params.user);
    }
  }, [route.params]);

  useEffect(() => {
    const fetchLastMessages = async () => {
      if (userData) {
        const messages = await getLastMessages(userData.localId);
        setLastMessages(messages);
      }
    };
    fetchLastMessages();
  }, [userData]);

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
      {/* ... other components */}
      {lastMessages.length === 0 &&
        userData &&
        userData.email !== adminData.email && (
          <View style={{ margin: 32 }}>
            <Button
              title="Débuter la discussion"
              color={Constants.primary}
              tintColor={"white"}
              onPress={() => navigation.navigate("Contacts", { userData })}
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