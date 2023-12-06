import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

const AnimalShelters = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.shelter}>
            <Text style={styles.shelterTitle}>Tierheime</Text>
          </View>
        </View>
        <View style={styles.shelterContainer}>
          <Text style={styles.shelterNameText}>
            Name:{" "}
            <Text style={styles.shelterName}>
              Tierschutzverein Tierheim Falkensee
            </Text>
          </Text>
          <Text style={styles.shelterPhone}>Telefon: 033/228 389 999</Text>
          <Text style={styles.shelterAdress}>
            Adresse: Dallgower Str. 104, 14624 Dallgow-Döberitz
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierschutzverein+Tierheim+Falkensee+und+Umgebung+e.V./@52.5476362,13.0628575,14z/data=!4m9!1m2!2m1!1stierheim!3m5!1s0x47a8f91a9b9a20bf:0x8e8bec1b2d4557cb!8m2!3d52.5475953!4d13.097861!15sCgh0aWVyaGVpbVoKIgh0aWVyaGVpbZIBDmFuaW1hbF9zaGVsdGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJOZGpWeVMyNUJSUkFC?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shelterContainer}>
          <Text style={styles.shelterNameText}>
            Name:{" "}
            <Text style={styles.shelterName}>Tierschutzverein für Berlin</Text>
          </Text>
          <Text style={styles.shelterPhone}>Telefon: 030/768 880</Text>
          <Text style={styles.shelterAdress}>
            Adresse: Hausvaterweg 39, 13057 Berlin
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierschutzverein+f%C3%BCr+Berlin/@52.5754614,13.5096777,14z/data=!4m9!1m2!2m1!1stierheim!3m5!1s0x47a84c86e56d813d:0xd93adc7252fd0385!8m2!3d52.5754614!4d13.5446966!15sCgh0aWVyaGVpbVoKIgh0aWVyaGVpbZIBHmFuaW1hbF9wcm90ZWN0aW9uX29yZ2FuaXphdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSWk4yUTNXakJSUlJBQg?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shelterContainer}>
          <Text style={styles.shelterNameText}>
            Name: <Text style={styles.shelterName}>Tierheim Wesendahl</Text>
          </Text>
          <Text style={styles.shelterPhone}>Telefon: 033/412 51 47</Text>
          <Text style={styles.shelterAdress}>
            Adresse: Mühlenstraße 23, 15345 Altlandsberg
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierheim+Wesendahl+e.V./@52.5564704,13.5158146,12z/data=!4m9!1m2!2m1!1stierheim+!3m5!1s0x47a9cca32230c5c3:0x85dc4b116e47d44f!8m2!3d52.5936601!4d13.8335195!15sCgh0aWVyaGVpbVoKIgh0aWVyaGVpbZIBDmFuaW1hbF9zaGVsdGVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU56TjFsUGFHWjNFQUU?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shelterContainer}>
          <Text style={styles.shelterNameText}>
            Name: <Text style={styles.shelterName}>Tierheim Ladeburg</Text>
          </Text>
          <Text style={styles.shelterPhone}>Telefon: </Text>
          <Text style={styles.shelterAdress}>
            Adresse: Biesenthaler Weg 23, 16321 Bernau bei Berlin
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierheim+Ladeburg/@52.7151848,13.4483648,12z/data=!4m9!1m2!2m1!1stierheim+!3m5!1s0x47a9b1688052e8e3:0xab006e5688cf5e46!8m2!3d52.7151503!4d13.5885009!15sCgh0aWVyaGVpbVoKIgh0aWVyaGVpbZIBDmFuaW1hbF9zaGVsdGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJoTTNSeVYzZDNSUkFC?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* onPress={()=>Linking.openURL(‘link‘)} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 10,
    padding: 30,
  },

  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },

  shelter: {
    marginTop: 20,
    alignItems: "center",
    paddingBottom: 20,
  },

  shelterTitle: {
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

  shelterContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "",
    paddingTop: 10,
  },

  shelterName: {
    color: "#656566",
    fontWeight: "bold",
  },

  shelterNameText: {
    color: "#fe9a5e",
    fontWeight: "bold",
  },

  shelterPhone: {
    paddingTop: 5,
  },

  shelterAdress: {
    paddingTop: 5,
  },

  googleBtn: {
    backgroundColor: "#fe9a5e",
    alignItems: "center",
    borderRadius: 30,
  },

  googleText: {
    color: "white",
    fontWeight: "bold",
    padding: 3,
  },

  googleContainer: {
    paddingTop: 10,
  },
});

export default AnimalShelters;
