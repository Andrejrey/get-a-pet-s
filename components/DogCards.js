import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../api/axiosInstansdogApi";
import { useState } from "react";

const DogCards = () => {
  const navigation = useNavigation();
  // const [animalData, setAnimalData] = useState();

  // const searchDogApi = async () => {
  //   try {
  //     const response = await axiosInstance.get("/breeds", {
  //       params: {
  //         limit: 20,
  //       },
  //     });
  //     setAnimalData(response.data);
  //   } catch (err) {
  //     setErrorMessage("Something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   searchDogApi();
  // }, []);

  // const dogData = animalData.animalResults;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.horiScroll}
    >
      {animalData.map((dogs, index) => {
        const dogIndex = index;
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("Details", { dogData, dogIndex: dogIndex })
            }
            style={styles.card}
          >
            <Image source={{ uri: dogs.image.url }} style={styles.image} />
            <View style={styles.detail}>
              <Text style={styles.name}>{dogs.name}</Text>
              <Text style={styles.lifeSpan}>{dogs.life_span}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DogCards;

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
    paddingLeft: 35,
  },

  lifeSpan: {
    fontWeight: "bold",
    paddingTop: 3,
    color: "#fe9a5e",
  },
});
