import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  
} from "react-native";
import {RadioButton} from "react-native-paper";
import axios from "axios";


const Sign_up =( props ) => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [value, setValue ] = useState("");
  

// Calling Login API
const SignupAPI = () =>{
  axios
    .post('http://10.0.2.2:8000/api/users/', {
        
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "address": address,
        "gender":gender||first,

    })
    .then(function (response) {
      // handle success
      // alert(JSON.stringify(response.data));
      // token: JSON.stringify(response.data.token)
      props.navigation.navigate("Login")
      
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    });
  }

 
  return (
    <ScrollView>
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={styles.container1}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <View style={styles.container}>
      <Text style={styles.sign_up}>Sign Up</Text>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#57595b"
          text-decoration= "underline"
          onChangeText={(first_name) => setfirst_name(first_name)}
          value= {first_name}
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Nmae"
          placeholderTextColor="#57595b"
          text-decoration= "underline"
          onChangeText={(last_name) => setlast_name(last_name)}
          value={last_name}
  
        />
      </View>

      

      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="E-Mail"
        placeholderTextColor="#57595b"
        text-decoration= "underline"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
    </View>

    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor="#57595b"
      text-decoration= "underline"
      onChangeText={(password) => setPassword(password)}
      value={password}

    />
  </View>

  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Address"
      placeholderTextColor="#57595b"
      text-decoration= "underline"
      onChangeText={(address) => setaddress(address)}
      value={address}
    />
  </View>

  <View style={styles.adjust}>

   <Text style={styles.gen}>Gender: </Text>
  
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={styles.radio}>
        
        <RadioButton value="first" />
        <Text style={ styles.text }>Male</Text>
      </View >
      <View style={styles.radio}>
       
        <RadioButton value="Second" />
         <Text style={ styles.text }>Female</Text>
      </View>
    </RadioButton.Group>
    </View>
      <TouchableOpacity style={styles.loginBtn}
      // onPress={() =>{Alert.alert("MapScreen")}}

      onPress={SignupAPI}                           // Calling Signup API
      
      >
        <Text style={styles.loginText}
        
        >Sign Up</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

 
const styles = StyleSheet.create({
  
  container: {
   
    alignItems: "center",
    justifyContent: "center",
  },
 
  
 
  inputView: {
    
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 12,
    width: "70%",
    height: 40,
    marginBottom: 8,
    
  },
  
 
  TextInput: {
    
    height: 30,
    flex: 1,
    padding: 7,
    marginLeft: 20,
    
  },
 
  sign_up: {
    color: "#4374da",
    fontSize: 35,
    fontWeight:"bold",
    marginBottom: 25,
  },

  loginText:{
    color: "black",
    fontSize: 20,


  },
 
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#4374da",
    
  },
  adjust:{
    flex:0,
    flexDirection: "row",
    alignSelf: "baseline",
    paddingLeft:65,
  },
  radio: {
    width: "auto",
    height: "auto",
    flexDirection: "row",
  },
  text:{
    width: "auto",
    height: "auto",
    marginTop: 10,
    },
    gen:{
      paddingTop:8,
    }
});
export default Sign_up;