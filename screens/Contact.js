import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Contact = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <View style={styles.contact}>
            <Text style={styles.contactTitle}>
              Telefonnummer:{" "}
              <Text style={styles.contactNumber}>+49/123-456-789</Text>
            </Text>
            <Text style={styles.contactOr}>Or: </Text>
          </View>
        </View>
        <View style={styles.formularContainer}>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput placeholder={"Name"} style={styles.input2} />
          </View>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput placeholder={"Phone number"} style={styles.input2} />
          </View>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput placeholder={"E-mail"} style={styles.input2} />
          </View>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput placeholder={"Subject"} style={styles.input2} />
          </View>
          <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeMissingContainer}
          >
            <TextInput
              multiline={true}
              numberOfLines={6}
              placeholder={"Message"}
              style={styles.input3}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.addcontainer}>
              <Text style={styles.addText}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  contact: {
    marginTop: 20,
    alignItems: "center",
    paddingBottom: 20,
  },

  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fe9a5e",
    alignContent: "center",
  },

  contactNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#656566",
    alignContent: "center",
  },

  contactOr: {
    flex: 1,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fe9a5e",
    alignContent: "center",
    borderRadius: 100,
    marginTop: 20,
  },

  formularContainer: {
    backgroundColor: "white",
    height: "100%",
  },

  input2: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    width: "100%",
    borderRadius: 15,
    color: "#656566",
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#fe9a5e",
    marginBottom: 20,
  },

  input3: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 200,
    width: "100%",
    borderRadius: 15,
    color: "#656566",
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#fe9a5e",
    marginBottom: 40,
  },

  addcontainer: {
    height: 35,
    backgroundColor: "#fe9a5e",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Contact;
