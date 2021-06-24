import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  
} from "react-native";
import axios from 'axios';
import Sign_up from "./Sign_up"
import MapView from './MapScreens/MapView';
import MapLocation from "./MapScreens/MapLocation";

// import { Directions } from "react-native-gesture-handler";
// import Sign_up from "./Sign_up";

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator, reactnavigationStack } from 'react-navigation';  



// const AppStackNavigator = createStackNavigator(  
//   {  
//       Sign_up: Sign_up, 
//       Login: LoginScreen,
//   }, 
//   {  
//       initialRouteName: "Home"  
//   }   
// )
// const navigator = createAppContainer(switchNavigator)

//     export default () => {
//       return(
//         <App
//         ref={navigator =>{
//           setNavigator(navigator)
//         }}
//         />
//       );



const Login = ( props ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Calling Login API

  const LoginAPI = () =>{
    axios
      .post('http://10.0.2.2:8000/api/users/login/', {
          
        "email":email,
        "password":password,

      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        // props.navigation.navigate("MapView");
        
        
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
    }
  return (
   <ScrollView>
   
    <KeyboardAvoidingView                                    // Key Board Adjustment
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={styles.container1}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  

    <View style={styles.container}>      
      <Image style={styles.image} source={require("../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}
      
      onPress={() =>{props.navigation.navigate("MapView")}}
      // onPress={LoginAPI}                                      // Calling LoginAPA Function
      >

        <Text style={styles.loginText}>LOGIN</Text>

      </TouchableOpacity>

      <View style={styles.SignUPStyle}>
        <Text style={styles.SignUPText}> Not have Acount  </Text>
        
        <TouchableOpacity 
        onPress={() =>props.navigation.navigate("Sign_up")}>
        
         <Text style={styles.SignUpbtn}>Sign_up</Text>
        </TouchableOpacity>
      
      </View>
      
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    

  },
  image: {
    marginTop: 90,
    // position: "absolute",
  },
 
  inputView1: {
    
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderBottomColor: "grey",
    
  },
  inputView2: {
    
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderBottomColor: "grey",
    
  },
  TextInput: {
    
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderStyle: "solid",
  },
 
  forgot_button: {
    height: 30,
    marginTop: 10,
    
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#226cc5",
    
    
  },

  loginText: {
    fontWeight: 'bold',
   fontSize: 18,
  },
  SignUPStyle:{
    flexDirection: "row",
    marginTop: 95,

  },
  SignUPText:{
    marginTop: 6
  },
  SignUpbtn:{
    fontSize: 20,
    color: "red",
    textDecorationLine: 'underline',

  }

});



export default Login;

