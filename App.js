import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  Ionicons,
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import AnimalShelters from "./screens/AnimalShelters";
import Contact from "./screens/Contact";
import Donatios from "./screens/Donations";
import MissingPets from "./screens/MissingPets";
import PetsForAdoption from "./screens/PetsForAdoption";
import Vet from "./screens/Vet";
import CustomDrawer from "./components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: "#fe9a5e",
          drawerActiveTintColor: "white",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: -25,
            fontSize: 16,
          },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#fe9a5e",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={AboutUs}
          options={{
            drawerIcon: ({ color }) => (
              <Entypo name="text" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Pets For Adoption"
          component={PetsForAdoption}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="dog" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Missing Pets"
          component={MissingPets}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="search" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Animal Shelters"
          component={AnimalShelters}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="cat" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Vet"
          component={Vet}
          options={{
            drawerIcon: ({ color }) => (
              <Fontisto name="doctor" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Donatios"
          component={Donatios}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="money-check" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="smartphone" size={22} color={color} />
            ),
          }}
        />
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
