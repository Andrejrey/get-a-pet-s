import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import AnimalShelters from "./screens/AnimalShelters";
import Contact from "./screens/Contact";
import Donatios from "./screens/Donations";
import MissingPets from "./screens/MissingPets";
import PetsForAdoption from "./screens/PetsForAdoption";
import Vet from "./screens/Vet";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Pets For Adoption" component={PetsForAdoption} />
        <Drawer.Screen name="Missing Pets" component={MissingPets} />
        <Drawer.Screen name="Animal Shelters" component={AnimalShelters} />
        <Drawer.Screen name="Vet" component={Vet} />
        <Drawer.Screen name="Donatios" component={Donatios} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
