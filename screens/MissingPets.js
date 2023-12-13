import React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Keyboard,
} from "react-native";
// import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Missing from "../components/Missing";

export default function App() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [missingItems, setMissingItems] = useState([]);

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [snapPoints, setSnapPoints] = useState(["44.3%"]);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const AddMissing = () => {
    address && phone && text !== ""
      ? setMissingItems([
          ...missingItems,
          {
            address: address,
            phone: phone,
            text: text,
          },
        ])
      : null;
    setAddress("");
    setPhone("");
    setText("");
  };

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
      if (Platform.OS === "ios") {
        setSnapPoints(["90%"]);
      } else {
        setSnapPoints(["83.5%"]);
      }
      setIsOpen(true);
    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
      setSnapPoints(["44.3%"]);
      setIsOpen(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  // const FoundPet = (index) => {
  //   let itemsCopy = [...todoItems];
  //   itemsCopy.splice(index, 1);
  //   setMissingItems(itemsCopy);
  // };

  return (
    <View style={styles.container}>
      <ScrollView style={{ opacity: isOpen ? 0.2 : 1 }}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/illustrations/kutomato3.png")}
          />
        </View>
        <View style={styles.taskConteiner}>
          <View style={styles.missing}>
            <Text style={styles.missingName}>Vermisst wird</Text>
          </View>
          <View style={styles.missings}>
            {missingItems.map((item, index) => {
              return <Missing key={index} data={item} />;
            })}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.open} onPress={() => handleSnapPress(0)}>
        <Text style={styles.openTitle}>Melde ein vermisstes Haustier</Text>
      </TouchableOpacity>
      <BottomSheet
        backgroundStyle={{ backgroundColor: "#fe9a5e" }}
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={setIsOpen[false]}
      >
        <BottomSheetView>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput
              placeholder={"Adresse"}
              value={address}
              style={styles.input2}
              onChangeText={(address) => setAddress(address)}
            />
          </View>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput
              placeholder={"Telefonnummer"}
              value={phone}
              style={styles.input2}
              onChangeText={(phone) => setPhone(phone)}
            />
          </View>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={"Text"}
              value={text}
              style={styles.input3}
              onChangeText={(text) => setText(text)}
            />
          </View>
          <TouchableOpacity onPress={() => AddMissing()}>
            <View style={styles.addcontainer}>
              <Text style={styles.addText}>Post</Text>
            </View>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },

  taskConteiner: {
    paddingHorizontal: 20,
  },

  missing: {
    alignItems: "center",
    paddingBottom: 20,
  },

  missingName: {
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

  missings: {
    marginTop: 30,
    paddingBottom: 90,
    alignItems: "center",
  },

  writeMissingContainer: {
    backgroundColor: "#fe9a5e",
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    // borderTopWidth: 1,
    // borderTopColor: "#ccc",
  },

  input: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    width: "90%",
    borderRadius: 30,
    color: "#656566",
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#fe9a5e",
  },

  input2: {
    marginLeft: 8,
    paddingVertical: 7,
    paddingHorizontal: 7,
    width: "90%",
    borderRadius: 15,
    color: "#656566",
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#fe9a5e",
  },

  input3: {
    marginLeft: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 100,
    width: "90%",
    borderRadius: 15,
    color: "#656566",
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#fe9a5e",
  },

  addcontainer: {
    height: "30%",
    backgroundColor: "#fe9a5e",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  open: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    backgroundColor: "#fe9a5e",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  openTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
