import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewsDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.area}>
          <Image
            source={require("../assets/images/news/news1.jpg")}
            style={styles.image}
          />
          {/* <Button title="News" onPress={() => Vibration.vibrate()}></Button> */}
        </View>
        <Text style={styles.title}>
          Johny und Leo haben ein neues Zuhause gefunden
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  icon: {
    color: "white",
    fontSize: 32,
  },

  image: {
    borderRadius: 15,
    height: 190,
    width: "90%",
    alignSelf: "center",
  },

  area: {
    marginTop: 45,
    height: 190,
    width: "100%",
  },

  title: {
    width: "90%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#656566",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 6,
  },

  text: {
    width: "90%",
    color: "#656566",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 15,
  },

  backText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    padding: 15,
  },

  backContainer: {
    height: 60,
    backgroundColor: "white",
  },
});
