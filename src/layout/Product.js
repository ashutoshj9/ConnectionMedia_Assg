import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Product = ({ navigation }) => {
  const getProductDetail = navigation.getParam("productDetail");
  console.log(getProductDetail);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", backgroundColor: "#fff" }}>
        <Image
          source={{ uri: getProductDetail.images[0] }}
          style={{ height: 200, width: "100%" }}
          resizeMode="center"
        />
      </View>
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
      <Text style={{ fontSize: 12, alignSelf: "flex-start" }}>
        {getProductDetail.description}
      </Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
