import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Discussions from "../screens/Discussions";
import Inscription from "../screens/Inscription";
import Constants from "../Constants";

const Stack = createNativeStackNavigator();

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
          component={Home}
          options={{ title: "Messages" }}
        />
        <Stack.Screen name="Discussions" component={Discussions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
