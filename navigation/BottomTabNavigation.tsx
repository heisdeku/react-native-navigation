import * as React from "react";
import { Text, View, Button, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { TopBarNavigator } from "./TopBarNavigaion";

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03cafc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "800" }}>
        Home is here
      </Text>
    </View>
  );
}

function Contact({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c203fc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "800" }}>
        Contact
      </Text>
      <Button title="go back" onPress={() => navigation.goBack} />
    </View>
  );
}

function About({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#48d696",
      }}
    >
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "800" }}>
        About
      </Text>
      <Button title="go back" onPress={() => navigation.goBack} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "#191e63" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={TopBarNavigator}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={Platform.OS === "ios" ? "ios-contacts" : "md-mail-open"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={
                Platform.OS === "ios"
                  ? "ios-information-circle"
                  : "md-information-circle"
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
