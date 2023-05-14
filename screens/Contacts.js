import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { List } from "react-native-paper";
import * as Contacts from "expo-contacts";

const ContactsScreen = ({ navigation, route }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <List.Item
      key={item.id}
      title={item.name}
      description={
        item.phoneNumbers && item.phoneNumbers[0]
          ? item.phoneNumbers[0].number
          : ""
      }
     //! Cause an ERROR  TypeError: Cannot read property 'userData' of undefined, js engine: hermes
      onPress={() =>
        navigation.navigate("Discussions", {
          userData: route.params.userData,
          recipientData: item,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
});

export default ContactsScreen;