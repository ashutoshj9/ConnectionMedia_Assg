import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import StarRating from "../component/StarRating";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Screen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [like, setLike] = useState(false);
  const [likedCards, setLikedCards] = useState([]);

  const fetchProduct = async () => {
    await fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProduct(data.products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const render = ({ item }) => {
    const isLiked = likedCards.includes(item.id);
    console.log(isLiked);
    const handleLike = () => {
      if (isLiked) {
        setLikedCards(likedCards.filter((id) => id !== item.id));
      } else {
        setLikedCards([...likedCards, item.id]);
      }
    };

    const handleProduct = () => {};

    return (
      <View
        style={{
          padding: "2%",
          backgroundColor: "#fff",
          marginVertical: "1%",
          flex: 1,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderRightWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              paddingRight: 10,
              justifyContent: "center",
            }}
            onPress={() =>
              navigation.navigate("Product", { productDetail: item })
            }
          >
            <Image
              source={{ uri: item.images[0] }}
              style={{ height: 80, width: 80 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: "2%",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                paddingBottom: "2%",
              }}
            >
              <Text style={{ fontWeight: "600" }}>{item.title}</Text>
              <Text style={{ fontSize: 10 }}>{item.category}</Text>
              <Text
                style={{ fontSize: 12, fontWeight: "900", color: "#48D1CC" }}
              >
                ${item.price.toFixed(2)}
              </Text>
            </View>
            <View style={{ paddingVertical: "2%" }}>
              <Text style={{ fontSize: 10 }}>{item.description}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: "2%",
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: "2%",
                    backgroundColor: "#78C27B",
                    alignSelf: "flex-start",
                    borderRadius: 2,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 10 }}>
                    Add to cart
                  </Text>
                </TouchableOpacity>
                <StarRating rating={item.rating} />
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={handleLike}>
                  <FontAwesome
                    name={isLiked ? "heart" : "heart-o"}
                    size={20}
                    color={isLiked ? "rgb(255,0,100)" : "#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {product && (
        <FlatList
          data={product}
          keyExtractor={(item) => item.id}
          renderItem={render}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Screen;
