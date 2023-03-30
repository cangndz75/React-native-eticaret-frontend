import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { cartItems } from "./Cart";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
const ConfirmOrder = () => {
  const itemsPrice = 4000;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;

  const navigate = useNavigation();
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading*/}

      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Ödemeyi"
        text2="onayla"
      />
      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              image={i.image}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading={"Ürün Fiyat"} value={itemsPrice} />
      <PriceTag heading={"Kargo Bedeli"} value={shippingCharges} />
      <PriceTag heading={"Vergi"} value={tax} />
      <PriceTag heading={"Toplam"} value={totalAmount} />
      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          Ödemeyi Onayla
        </Button>
      </TouchableOpacity>
    </View>
  );
};
const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>{value} TL</Text>
  </View>
);

export default ConfirmOrder;
