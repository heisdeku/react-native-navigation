import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03cafc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>
        Home is here!
      </Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c203fc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>
        Contact is here!
      </Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

function About({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#48d969",
      }}
    >
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>
        About is here!
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const MyTabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91c63",
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: "white",
          marginTop: insets.top,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ tabBarLabel: "Contact" }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: "About" }}
      />
    </Tab.Navigator>
  );
};

export const TopBarNavigator = () => {
  return <MyTabs />;
};
