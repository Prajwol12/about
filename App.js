import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";


const Contact = ({ navigation }) => {
  const[names,setName]=useState("");
  const[email,setEmail]=useState("");
  const[number,setNumber]=useState("");
  const[company,setCompany]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState("");

  const submit = () => {
    if (!names || !email ||  !message  || !subject) {
      Alert.alert("fill the empty");
    } else {
      Alert.alert(`Data is entered by Mr/Mrs ${names}`);
     
      
    }
  };

  return (
    <View style={styles.mainContainer}>
    <Text style={styles.mainHeader}>Contact Us</Text>
    <Text style={styles.description}>How can we help you?</Text>
    
    <View style={styles.inputContainer}>
      <Text style={styles.labels}>Name</Text>
      <TextInput
      style={styles.InputStyle}
      placeholder={"Your Name"}
      value={names}
      onChangeText={(username)=>setName(username)}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.labels}>Your Email</Text>
      <TextInput
      style={styles.InputStyle}
      placeholder={"Your Email"}
      value={email}
      onChangeText={(email)=>setEmail(email)}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.labels}>Your Phone</Text>
      <TextInput
      style={styles.InputStyle}
      placeholder={"Your Phone"}
      value={number}
      onChangeText={(number)=>setNumber(number)}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.labels}>Your Company</Text>
      <TextInput
      style={styles.InputStyle}
      placeholder={"Your Company"}
      value={company}
      onChangeText={(company)=>setCompany(company)}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.labels}>Subject</Text>
      <TextInput
      style={styles.InputStyle}
      placeholder={"Subject"}
      value={subject}
      onChangeText={(subject)=>setSubject(subject)}
      />
    </View>

    <View style={styles.inputContainer}>
        <Text style={styles.labels}> Message </Text>
        <TextInput
          style={styles.InputStyle}
          placeholder={"Type your message"}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
          
        />
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          
        ]}
       
        onPress={submit}>
        <Text style={styles.buttonText}> Send </Text>
      </TouchableOpacity>

    </View>   

      

     
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingVertical:20,
    backgroundColor: "#fff",
    
  },
  mainHeader: {
    fontSize: 20,
    
    fontWeight:"bold",
    paddingTop: 20,
    paddingBottom: 15,
    
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 5,
   
    
  },
  labels: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
   
    lineHeight: 20,
    
    
  },
  InputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  
  buttonStyle: {
    
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginLeft:150,
  },
  buttonText: {
    backgroundColor:"pink",
    fontSize:35,
    marginLeft:10,
    color: "white",
  },
 
});

export default Contact;