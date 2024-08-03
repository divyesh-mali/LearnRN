// Place this in index.js to run this code
// eg : AppRegistry.registerComponent(appName, () => buttonInfo);

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const buttonInfo = () => {

    const onPress1 = () => {
        alert('Button clicked')
    }

    const onPress2 = (name) => {
        console.warn('Button clicked with : ', name)
    }

    let age = 10;
    const onPress3 = (age) => {
        age = 20;
        console.warn('Age value : ', age)
    }
    
    return (
        <View>

        {/* This is how you pass a function to a button */}
      <Button title="Click me" onPress={onPress1} color="blue"/>

        {/* This is how you pass a function to a button with parameters*/}
        <Button title="Click me" onPress={ () => onPress2("Parameters") } color="red"/>

        {/* Why is the age value changing but not reflecting on UI ? See 'Props' & 'States' */}
        <Button title="Click me" onPress={ () => onPress3("Parameters") } color="green"/>

        <Text>Age is : {age}</Text>
    </View>
  )
}

export default buttonInfo

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})