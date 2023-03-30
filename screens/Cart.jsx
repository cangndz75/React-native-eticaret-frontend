import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Beyaz Tişört",
    image:
      "https://cdn.dsmcdn.com/mnresize/1200/1800/ty67/product/media/images/20210204/18/59995114/72844432/1/1_org_zoom.jpg",
    product: "asfsdsfs",
    stock: 3,
    price: 160,
    quantity: 2,
  },
  {
    name: "Beyaz Tişört 2",
    image:
      "https://cdn.dsmcdn.com/mnresize/1200/1800/ty67/product/media/images/20210204/18/59995114/72844432/1/1_org_zoom.jpg",
    product: "asfsdsfs1",
    stock: 3,
    price: 150,
    quantity: 2,
  },
];

const Cart = () => {
  const navigate = useNavigation();
  const incrementHandler = (id, qty, stock) => {
    console.log("Increasing", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("Decreasing", id, qty);
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emptyCart={true} />
      <Heading
        text1="Gündüz Ticaret"
        text2="Sepetim"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              icrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Ürün</Text>
        <Text>950 TL</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Siparişi Onayla
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
