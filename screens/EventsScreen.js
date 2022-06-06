import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

function EventsHome() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHome} />
    </Stack.Navigator>
  );
}
