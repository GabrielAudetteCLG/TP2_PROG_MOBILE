import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Stack, ListItem, Avatar } from "@react-native-material/core";
import { signup } from "../services/userService";
import Constants from "../Constants";

export default function Inscription(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cellulaire, setCellulaire] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  // const userInfos = [
  //   { name: "Nom", value: name },
  //   { name: "email", value: email },
  //   { name: "password", value: password },
  //   { name: "confirmation", value: confirmation },
  //   { name: "cellulaire", value: cellulaire },
  // ];

  const signUpUser = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne sont pas identiques.");
      return;
    }
    const response = await signup(email, password);

    if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
      return;
    }

    props.navigation.navigate("Login");
  };

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <Image
        style={styles.logo}
        source={require("../assets/icon-chat-app-text.png")}
      />
      <Text
        style={{
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Restez connecté avec vos proches
      </Text>
      <Pressable
        title="Login"
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          placeholderTextColor="black"
          autoComplete="name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
          autoComplete="email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="black"
          autoComplete="new-password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmation"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cellulaire"
          placeholderTextColor="black"
          keyboardType="phone-pad"
          returnKeyType="done"
          autoComplete="tel"
          onChangeText={(text) => setCellulaire(text)}
        />
        {passwordError && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Les mots de passe ne correspondent pas.
          </Text>
        )}
        {passwordLengthError && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Le mot de passe doit contenir au moins 5 caractères.
          </Text>
        )}
        <Pressable
          title="Inscription"
          style={styles.button}
          onPress={signUpUser}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Inscription
          </Text>
        </Pressable>
      </View>
    </Stack>
  );
}
// export default function Inscription({ navigation }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmation, setConfirmation] = useState("");
//   const [cellulaire, setCellulaire] = useState("");
//   const [passwordError, setPasswordError] = useState(false);
//   const [passwordLengthError, setPasswordLengthError] = useState(false);
//   const userInfos = [
//     { name: "Nom", value: name },
//     { name: "email", value: email },
//     { name: "password", value: password },
//     { name: "confirmation", value: confirmation },
//     { name: "cellulaire", value: cellulaire },
//   ];

//   return (
//     <Stack spacing={4} style={{ flex: 1 }}>
//       <Image
//         style={styles.logo}
//         source={require("../assets/icon-chat-app-text.png")}
//       />
//       <Text
//         style={{
//           textAlign: "center",
//           paddingTop: 50,
//           fontWeight: "bold",
//           fontSize: 20,
//         }}
//       >
//         Restez connecté avec vos proches
//       </Text>
//       <Pressable
//         title="Login"
//         style={styles.button}
//         onPress={() => {
//           navigation.navigate("Login");
//         }}
//       >
//         <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
//       </Pressable>
//       <View style={styles.view}>
//         <TextInput
//           style={styles.input}
//           placeholder="Nom"
//           placeholderTextColor="black"
//           autoComplete="name"
//           onChangeText={(text) => setName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="black"
//           keyboardType="email-address"
//           autoComplete="email"
//           onChangeText={(text) => setEmail(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mot de passe"
//           placeholderTextColor="black"
//           autoComplete="new-password"
//           secureTextEntry={true}
//           onChangeText={(text) => setPassword(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Confirmation"
//           placeholderTextColor="black"
//           secureTextEntry={true}
//           onChangeText={(text) => setConfirmation(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Cellulaire"
//           placeholderTextColor="black"
//           keyboardType="phone-pad"
//           returnKeyType="done"
//           autoComplete="tel"
//           onChangeText={(text) => setCellulaire(text)}
//         />
//         {passwordError && (
//           <Text style={{ color: "red", textAlign: "center" }}>
//             Les mots de passe ne correspondent pas.
//           </Text>
//         )}
//         {passwordLengthError && (
//           <Text style={{ color: "red", textAlign: "center" }}>
//             Le mot de passe doit contenir au moins 5 caractères.
//           </Text>
//         )}
//         <Pressable
//           title="Inscription"
//           style={styles.button}
//           onPress={() => {
//             if (password === confirmation) {
//               setPasswordError(false);
//               if (password.length >= 5) {
//                 setPasswordLengthError(false);
//                 signup(userInfos);
//                 console.log(
//                   JSON.stringify(userInfos.map((info) => info.value))
//                 );
//                 navigation.navigate("Login");
//               } else {
//                 setPasswordLengthError(true);
//               }
//             } else {
//               setPasswordError(true);
//             }
//           }}
//         >
//           <Text style={{ color: "white", textAlign: "center" }}>
//             Inscription
//           </Text>
//         </Pressable>
//       </View>
//     </Stack>
//   );
// }

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
    backgroundColor: Constants.primary,
    color: "black",
    alignSelf: "center",
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 40,
  },
});
