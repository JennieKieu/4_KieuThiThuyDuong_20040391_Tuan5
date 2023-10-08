import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"]}
      style={styles.container}
    >
      <View style={styles.viewLogin}>
        <Text style={styles.textLogin}>
          <h1>LOGIN</h1>
        </Text>
      </View>

      <View style={styles.viewCen}>
        <View style={styles.viewInput}>
          <Image
            style={styles.imgInput}
            source={require("./assets/avatar_user 1.png")}
          ></Image>
          <TextInput placeholder="Name" style={styles.inputName}></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Image
            style={styles.imgInput}
            source={require("./assets/lock.png")}
          ></Image>
          <TextInput
            placeholder="Password"
            style={styles.inputName}
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>

      <View style={styles.viewBot}>
        <View style={styles.touchLogin}>
          <TouchableOpacity style={styles.textTouch}>
            <h2>LOGIN</h2>
          </TouchableOpacity>
        </View>
        <View style={styles.touchCA}>
          <TouchableOpacity style={styles.textCA}>
            <h2>Forgot your password</h2>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLogin: {
    marginTop: 75,
  },
  textLogin: {
    fontSize: 20,
  },
  imgInput: {
    height: 32,
    width: 32,
    margin: 15,
  },
  viewCen: {
    alignItems: "center",
  },
  viewInput: {
    backgroundColor: "rgba(242, 242, 242, 0.3)",
    height: 54,
    marginTop: 45,
    flexDirection: "row",
    borderColor: "#fff",
    borderWidth: 1,
  },
  inputName: {
    fontSize: 20,
    backgroundColor: "rgba(242, 242, 242, 0.3)",
  },
  
  touchLogin: {
    height: 45,
    width: 320,
    marginTop: 60,
    backgroundColor: "rgba(6, 0, 0, 1)",
    justifyContent: "center",
  },
  textTouch: {
    color: "#fff",
    textAlign: "center",
  },
  viewBot: {
    alignItems: "center",
    fontFamily: "Roboto",
  },
  touchCA: {
    marginTop: 35,
  },
});
