import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Login from "../screens/Login";
import Inbox from "../screens/Inbox";
import Discussions from "../screens/Discussions";
import Inscription from "../screens/Inscription";
import ContactsScreen from "../screens/Contacts";
import Constants from "../Constants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InboxTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Constants.primary,
      }}
    >
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="inbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Constants.textColor,
          headerStyle: {
            backgroundColor: Constants.primary,
          },
        }}
      >
        <Stack.Screen
          name="Inscription"
          component={Inscription}
          options={{ title: "Page d'inscription" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Se connecter" }}
        />
        <Stack.Screen
          name="Inbox"
          component={InboxTabs}
          options={{ title: "Messages" }}
        />
        <Stack.Screen name="Discussions" component={Discussions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
