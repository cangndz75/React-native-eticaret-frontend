import { View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <ActivityIndicator
      style={{ top: "50%", position: "absolute", alignSelf: "center" }}
      size={100}
      color={colors.color3}
    />
  );
};

export default Loader;
