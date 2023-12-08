import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/illustrations/kutomato4.png")}
          />
        </View>
        <View style={styles.app}>
          <Text style={styles.appName}>Get A Pet</Text>
        </View>
        {/* <NewsCards /> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    height: 180,
    width: 180,
    alignSelf: "center",
  },

  app: {
    alignItems: "center",
    paddingBottom: 20,
  },

  appName: {
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
});
