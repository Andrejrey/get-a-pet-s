import { StyleSheet, View, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
            <Text style={styles.animals}>Hunde</Text>
          </View>
          {/* <DogCards data={animalResults} /> */}
          <View>
            <Text style={styles.animals}>Katzen</Text>
          </View>
          {/* <CatCards /> */}
          <View>
            <Text style={styles.animals}>Andere</Text>
          </View>
          {/* <OtherCards /> */}
        </View>
      </View>
    </ScrollView>
  );
};

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

export default PetsForAdoption;
