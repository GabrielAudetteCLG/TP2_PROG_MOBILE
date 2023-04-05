import { StatusBar } from "expo-status-bar";
import AppNavigation from "./navigation/AppNavigation";
import Constants from "./Constants";

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" backgroundColor={Constants.primary} />
    </>
  );
}
