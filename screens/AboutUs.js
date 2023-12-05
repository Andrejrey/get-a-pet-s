import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AboutUs = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.area}>
          <Image
            source={require("../assets/images/aboutUs/img1.jpeg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Get A Pet</Text>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 5,
    paddingTop: 20,
  },

  image: {
    borderRadius: 15,
    height: 190,
    width: "90%",
    alignSelf: "center",
  },

  area: {
    marginTop: 5,
    height: 190,
    width: "100%",
  },

  title: {
    width: "90%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fe9a5e",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 6,
  },

  text: {
    width: "90%",
    color: "#656566",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export default AboutUs;
