// Add this to index.js

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


const formInput = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        console.log(name, email, password);
    }

  return (
    <View>
      <Text style={styles.text}>Signup Form</Text>
      <View>
        <Text>Name: {name}</Text>
        <TextInput 
            placeholder='Name' 
            style={styles.input}
            onChangeText={(val) => setName(val)}
            />

        <TextInput 
            placeholder='Email' 
            style={styles.input}
            keyboardType='email-address'
            onChangeText={(val) => setEmail(val)}
            />

        <TextInput 
            placeholder='Password' 
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            />

      </View>

      <Button title='Sign Up' onPress={handleSignUp} />

    </View>
  )
}

export default formInput

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: 'black'
    },

    input: {
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5
    }
})