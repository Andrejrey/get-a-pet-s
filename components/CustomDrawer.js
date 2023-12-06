import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          paddingTop: 40,
          paddingBottom: 20,
          backgroundColor: "#fe9a5e",
          borderBottomRightRadius: 70,
          borderBottomLeftRadius: 70,
        }}
      >
        <Image
          source={require("../assets/illustrations/kutomato1.png")}
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            alignSelf: "center",
            paddingTop: 5,
          }}
        >
          Get A Pet
        </Text>
      </ImageBackground>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 10 }}
      >
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fe9a5e",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: "row" }}>
          <MaterialIcons name="logout" size={24} color="white" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              marginLeft: 5,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
