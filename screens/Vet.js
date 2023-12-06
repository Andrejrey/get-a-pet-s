import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

const Vet = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/illustrations/kutomato5.png")}
          />
        </View>
        <View style={styles.vetContainer}>
          <Text style={styles.vetNameText}>
            Name: <Text style={styles.vetName}>Tierarztpraxis Bärenwiese</Text>
          </Text>
          <Text style={styles.vetPhone}>Telefon: 030/233 626 27</Text>
          <Text style={styles.vetAdress}>
            Adresse: Uhlandstraße 151, 10719 Berlin
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierarztpraxis+B%C3%A4renwiese,+Tierarzt+Berlin-Wilmersdorf/@52.4974169,13.3226627,17z/data=!3m1!4b1!4m5!3m4!1s0x47a850f0c946619d:0x53b9600ffa29d53d!8m2!3d52.4974137!4d13.3248514?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vetContainer}>
          <Text style={styles.vetNameText}>
            Name:{" "}
            <Text style={styles.vetName}>Tierarztpraxis am Hermannplatz</Text>
          </Text>
          <Text style={styles.vetPhone}>Telefon: 030/622 62 88</Text>
          <Text style={styles.vetAdress}>
            Adresse: Lucy-Lameck-Straße 1, 12049 Berlin
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierarztpraxis+am+Hermannplatz/@52.4861507,13.4212229,17z/data=!3m1!4b1!4m5!3m4!1s0x41652371ae8ceab3:0xc6a6c0e38e56d223!8m2!3d52.4861475!4d13.4234116?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vetContainer}>
          <Text style={styles.vetNameText}>
            Name: <Text style={styles.vetName}>Tierarztpraxis Bräuer</Text>
          </Text>
          <Text style={styles.vetPhone}>Telefon: 030/ 691 26 77</Text>
          <Text style={styles.vetAdress}>
            Adresse: Krüllsstraße 5, 12435 Berlin
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Janine+Br%C3%A4uer+Kleintierpraxis/@52.4921924,13.4456475,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84fcafc28d597:0xf2a2ef087c66d8bb!8m2!3d52.4922103!4d13.4478335?hl=de"
                )
              }
            >
              <Text style={styles.googleText}>Google Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vetContainer}>
          <Text style={styles.vetNameText}>
            Name: <Text style={styles.vetName}>Tierarztpraxis Tempelhof</Text>
          </Text>
          <Text style={styles.vetPhone}>Telefon: 030/ 705 96 24</Text>
          <Text style={styles.vetAdress}>
            Adresse: Eisenacher Str. 3, 12109 Berlin
          </Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Tierarztpraxis+Tempelhof/@52.4477632,13.3843513,17z/data=!3m1!4b1!4m5!3m4!1s0x47a8455aabe6f9ad:0x8b07634e178dbcdf!8m2!3d52.44776!4d13.38654?hl=de"
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

  vetContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#fe9a5e",
    paddingTop: 10,
  },

  vetName: {
    color: "#656566",
    fontWeight: "bold",
  },

  vetNameText: {
    color: "#fe9a5e",
    fontWeight: "bold",
  },

  vetPhone: {
    paddingTop: 5,
  },

  vetAdress: {
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

export default Vet;
