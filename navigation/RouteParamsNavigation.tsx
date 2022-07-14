import * as React from "react";
import { View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const data = require("../assets/data.json");

interface Item {
  name: string;
  title: string;
}

type HomeCardProps = {
  item: Item;
  navigation: any;
};

const CustomCard = ({ item, navigation }: HomeCardProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        height: 200,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
      }}
      onPress={() =>
        navigation.navigate("Single", {
          item: item,
          header: item.name,
        })
      }
    >
      <Text style={{ color: "white" }}>{item.name}</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }: StackNavigationProp) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#48d969",
        height: "100%"
      }}
    >
      {data.map((x) => {
        return (
          <CustomCard key={Math.random()} item={x} navigation={navigation} />
        );
      })}
    </View>
  );
};

const Single = (props) => {
  const item = props.route.params.item;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#036afc",
      }}
    >
      <Text style={{ color: "white" }}>{item.name}</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        {item.title}
      </Text>
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const MyStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "green" },
        }}
      />
      <Stack.Screen
        name="Single"
        component={Single}
        options={({ route }) => ({ title: route.params.header })}
      />
    </Stack.Navigator>
  );
};

export const RouteParamsNavigation = () => {
  return (
    <NavigationContainer>
      <MyStacks />
    </NavigationContainer>
  );
};
