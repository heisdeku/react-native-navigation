import React from "react";
import { View } from "react-native";

//navigation components
import DrawerNavigation from "./navigation/DrawerNavigation";
import TabNavigation from "./navigation/BottomTabNavigation";
import StackNavigation from "./navigation/StackNavigation";
import { TopBarNavigator } from "./navigation/TopBarNavigaion";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RouteParamsNavigation } from "./navigation/RouteParamsNavigation";
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, height: "100%" }}>
        <RouteParamsNavigation />
      </View>
    </SafeAreaProvider>
  );
}
