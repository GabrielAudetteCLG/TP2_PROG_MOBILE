import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Stack, ListItem, Avatar, Button } from "@react-native-material/core";
import Constants from "../Constants";
// import { getDatabase, ref, onValue, off } from "firebase/database";
// import { db } from "../config/firebaseConfig";

const adminData = {
  id: "ExNr00GVAEcfu2oBpouqbsRoIvt2",
  email: "support@contoso.ca",
  displayName: "Support",
};

export default function Inbox({ navigation, route }) {
  const userData = route.params;
  console.log("userData (Inbox page)", userData);
  const [lastMessages, setLastMessages] = useState([]);

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
              // onPress={() => {
              //   navigation.navigate("Discussions", {
              //     userData,
              //     recipientData: adminData,
              //   });
              // }}
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
