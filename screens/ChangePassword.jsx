import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import Header from "../components/Header";
const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const loading = false;
  const submitHandler = () => {
    alert("Merhaba");
  };
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      {/*Heading*/}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Giriş Yap</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Eski Şifre"
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          {...inputOptions}
          placeholder="Yeni Şifre"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={oldPassword === "" || newPassword === ""}
          style={styles.btn}
          onPress={submitHandler}
        >
          Güncelle
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;
