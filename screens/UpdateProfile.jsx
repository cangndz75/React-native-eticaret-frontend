import { View, Text, TouchableOpacity, ScrollView } from "react-native";
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

const UpdateProfile = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("Merhaba");
  };
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      {/* Heading*/}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Profili Güncelle</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View style={{}}>
          <TextInput
            {...inputOptions}
            placeholder="Ad"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            {...inputOptions}
            placeholder="E-mail"
            keyboardType="email-adress"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            placeholder="Adres"
            value={address}
            onChangeText={setAdress}
          />
          <TextInput
            {...inputOptions}
            placeholder="Semt"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            {...inputOptions}
            placeholder="Şehir"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            {...inputOptions}
            placeholder="Posta kodu"
            value={pinCode}
            onChangeText={setPinCode}
          />
          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={disableBtn}
            style={styles.btn}
            onPress={submitHandler}
          >
            Güncelle
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
