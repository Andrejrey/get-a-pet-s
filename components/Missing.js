import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Missing = (props) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/news/news1.jpg")}
        style={styles.image}
      />
      <View>
        <Text style={styles.itemText}>
          <Text style={styles.addressText}>Stadt/Addresse: </Text>
          {props.data.address}
        </Text>
        <Text style={styles.itemText}>
          <Text style={styles.phoneText}>Telefonnummer:</Text>{" "}
          {props.data.phone}
        </Text>
        <Text style={styles.itemText2}>
          <Text style={styles.messageText}>Nachricht:</Text> {props.data.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },

  image: {
    height: 190,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  card: {
    elevation: 2,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: "100%",
    shadowColor: "rgba(0,0,0, .6)",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 1,
  },

  itemText: {
    fontSize: 18,
    color: "#656566",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },

  itemText2: {
    fontSize: 18,
    color: "#656566",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 6,
  },

  phoneText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#656566",
  },

  addressText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#656566",
  },

  messageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fe9a5e",
  },
});

export default Missing;
