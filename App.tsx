import React from "react";
import { View } from "react-native";

//navigation components
import DrawerNavigation from "./navigation/DrawerNavigation";
import TabNavigation from "./navigation/BottomTabNavigation";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigation />
    </View>
  );
}
