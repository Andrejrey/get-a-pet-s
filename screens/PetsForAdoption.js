import { StyleSheet, View, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CatCards from "../components/CatCards";
import DogCards from "../components/DogCards";
import OtherAnimalCards from "../components/OtherAnimalCards";

const PetsForAdoption = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/illustrations/kutomato2.png")}
            />
          </View>
          <View style={styles.adopted}>
            <Text style={styles.adoptnumber}>Pets Adopted: 56</Text>
          </View>
          <View>
            <Text style={styles.animals}>Dogs</Text>
          </View>
          <DogCards />
          <View>
            <Text style={styles.animals}>Cats</Text>
          </View>
          <CatCards />
          <View>
            <Text style={styles.animals}>Other</Text>
          </View>
          <OtherAnimalCards />
        </View>
      </View>
    </ScrollView>
  );
};

export default PetsForAdoption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 10,
  },

  adopted: {
    alignItems: "center",
    paddingBottom: 5,
  },

  adoptnumber: {
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
  animalsContainer: {
    alignItems: "center",
  },

  animals: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    color: "#656566",
    fontWeight: "bold",
  },

  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
});
