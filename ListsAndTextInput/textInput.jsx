// Add this to index.js

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const textInput = () => {

    const [name, setName] = useState("");
    console.warn(name);

    const handleInput = (val) => {
        setName(val);
    }

    const handleClearInput = () => {
        setName("");
    }

  return (
    <View>
      <Text style={{fontSize: 25}}>Hi, {name}</Text>
      <TextInput 
        placeholder="Enter your name"
        style={styles.textBox}
        value={name}
        onChangeText={handleInput} // It will function the same even if you pass 'setName' as a parameter directly 
      />
      <Button title="Clear" onPress={handleClearInput} color='pink'/>
    </View>
  )
}

export default textInput

const styles = StyleSheet.create({
    textBox: {
        color:'black', 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 10, 
        margin: 10, 
        backgroundColor: 'white', 
        borderRadius: 5
    }
})