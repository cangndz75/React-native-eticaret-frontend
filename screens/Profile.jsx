import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const user = {
  name: "Can",
  email: "deneme@gmail.com",
};

const loading = false;
const Profile = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const logoutHandler = () => {
    console.log("Çıkış yapıldı.");
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Siparişlerim":
        navigation.navigate("orders");
        break;
      case "Profil":
        navigation.navigate("updateprofile");
        break;
      case "Şifre":
        navigation.navigate("changepassword");
        break;
      case "Çıkış Yap":
        logoutHandler();
        break;

      default:
        break;
    }
  };
  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {/* Loading*/}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{ uri: avatar }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />
              <TouchableOpacity>
                <Button
                  onPress={() =>
                    navigation.navigate("camera", { updateProfile: true })
                  }
                >
                  Fotoğrafı Değiştir
                </Button>
              </TouchableOpacity>
              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Siparişlerim"}
                  icon={"format-list-bulleted-square"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Admin"}
                  icon={"view-dashboard"}
                  reverse={true}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Profil"}
                  icon={"pencil"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Şifre"}
                  icon={"pencil"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Çıkış Yap"}
                  icon={"exit-to-app"}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
