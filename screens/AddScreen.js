import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AddScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 24 }}>This is the add screen</Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "orange",
          borderRadius: 5,
          marginTop: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
});
