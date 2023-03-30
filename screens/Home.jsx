import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
const categories = [
  { category: "Erkek", _id: "1" },
  { category: "Kadın", _id: "2" },
  { category: "Çocuk", _id: "3" },
  { category: "Teknoloji", _id: "4" },
  { category: "Bahçe", _id: "5" },
];
const products = [
  {
    price: 190,
    stock: 23,
    name: "Beyaz Tişört",
    _id: "6",
    images: [
      {
        url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty67/product/media/images/20210204/18/59995114/72844432/1/1_org_zoom.jpg",
      },
    ],
  },
  {
    price: 150,
    stock: 17,
    name: "Siyah Tişört",
    _id: "7",
    images: [
      {
        url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty67/product/media/images/20210204/18/59995114/72844432/1/1_org_zoom.jpg",
      },
    ],
  },
];
const Home = () => {
  const [category, setCategory] = useState("");
  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Sepete ekle", id);
  };

  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading text1="Gündüz Ticaret" text2="Ürünlerimiz" />

          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/*Kategoriler*/}

        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Ürünler */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
