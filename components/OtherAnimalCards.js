import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const OtherAnimalCards = (props) => {
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
          source={require("../assets/images/otherAnimals/other1.jpg")}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>Michel</Text>
          <Text style={styles.age}>2 jahre</Text>
        </View>
        <Text style={styles.city}>Berlin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/otherAnimals/other2.jpg")}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>Richy</Text>
          <Text style={styles.age}>5 jahre</Text>
        </View>
        <Text style={styles.city}>Hamburg</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/otherAnimals/other3.jpg")}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>Arbok</Text>
          <Text style={styles.age}>1 Jahr</Text>
        </View>
        <Text style={styles.city}>Stuttgard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OtherAnimalCards;

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
