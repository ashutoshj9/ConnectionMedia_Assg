import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Product = ({ navigation }) => {
  const getProductDetail = navigation.getParam("productDetail");
  console.log(getProductDetail);
  return (
    <ScrollView style={styles.container}>
      <View style={{ width: "100%", backgroundColor: "#fff" }}>
        <Image
          source={{ uri: getProductDetail.images[0] }}
          style={{ height: 200, width: "100%" }}
          resizeMode="center"
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "flex-start",
            fontWeight: "800",
            letterSpacing: 1,
          }}
        >
          {getProductDetail.brand} {getProductDetail.title}
        </Text>
        <Text
          style={{ fontSize: 12, alignSelf: "flex-start", fontWeight: "600" }}
        >
          {getProductDetail.category}
        </Text>
        <Text
          style={{
            fontSize: 12,
            alignSelf: "flex-start",
            paddingVertical: "2%",
          }}
        >
          {getProductDetail.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(0,100,250)",
            width: "45%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              textAlignVertical: "center",
              padding: "5%",
            }}
          >
            Add To Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(0,100,250)",
            width: "45%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              textAlignVertical: "center",
              padding: "5%",
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Product.navigationOptions = () => {
  return {
    headerShown: true,
  };
};
