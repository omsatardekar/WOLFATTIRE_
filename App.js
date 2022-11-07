
import {  StyleSheet, Text, View, Image}  from "react-native";
import { StatusBar }  from "expo-status-bar";
import WelcomeScreen from './src/screens/LoginSignUpScreens/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignUpScreens/LoginScreen';
import RootNavigation from "./src/RootNavigation";


export default function App() {
  return(
   <RootNavigation/>
  

  ); 
 }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

});
