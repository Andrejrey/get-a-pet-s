import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CatCards = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.horiScroll}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/cats/cat1.jpg")}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>Rozy</Text>
          <Text style={styles.age}>2 monate</Text>
        </View>
        <Text style={styles.city}>München</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/cats/cat2.jpg")}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>Leo</Text>
          <Text style={styles.age}>3 monate</Text>
        </View>
        <Text style={styles.city}>Dresden</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/cats/cat3.jpg")}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>Bella</Text>
          <Text style={styles.age}>2 monate</Text>
        </View>
        <Text style={styles.city}>Neuwied</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CatCards;

const styles = StyleSheet.create({
  image: {
    height: 190,
    width: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  card: {
    height: 250,
    elevation: 2,
    backgroundColor: "white",
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 250,
    shadowColor: "rgba(0,0,0, .6)",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 1,
  },

  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
  },

  name: {
    fontWeight: "bold",
    color: "#656566",
  },

  age: {
    fontWeight: "bold",
    color: "#fe9a5e",
  },

  city: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    paddingTop: 3,
    color: "#fe9a5e",
  },
});
