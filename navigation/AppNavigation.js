import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Ajoutez cette ligne

import Login from "../screens/Login";
import Home from "../screens/Home";
import Discussions from "../screens/Discussions";
import Inscription from "../screens/Inscription";
import ContactsScreen from "../screens/Contacts";
import Constants from "../Constants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // Ajoutez cette ligne

// Créez un nouveau composant pour le BottomTabNavigator
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Discussions" component={Home} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
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
          name="Home"
          component={HomeTabs}
          options={{ title: "Messages" }}
        />
        <Stack.Screen name="Discussions" component={Discussions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
