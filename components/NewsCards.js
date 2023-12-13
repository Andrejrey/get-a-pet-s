import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const NewsCards = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewsDetails")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/news/news1.jpg")}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>
            Johny und Leo haben ein neues Zuhause gefunden
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewsDetails")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/news/news2.jpg")}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>Faulenzen im neuen zuhause</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewsDetails")}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/news/news3.jpg")}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>
            Richtige Ernährung für Hunde und Katzen
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCards;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    padding: 20,
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
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: "100%",
    shadowColor: "rgba(0,0,0, .6)",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 1,
    alignSelf: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#656566",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 12,
  },
});
