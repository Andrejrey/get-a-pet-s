import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Donatios = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/other/paypal.png")}
      />
      <ScrollView>
        <TouchableOpacity style={styles.donations}>
          <Text style={styles.donationsTitle}>Spenden</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Donatios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  donations: {
    alignItems: "center",
    paddingBottom: 20,
  },

  donationsTitle: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    borderRadius: 100,
    backgroundColor: "#fe9a5e",
  },

  image: {
    marginTop: 30,
    marginLeft: 18,
    marginBottom: 30,
    height: 200,
    width: "90%",
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "#fe9a5e",
  },
});
