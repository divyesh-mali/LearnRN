// Add this to index.js

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const UseStateDemo = () => {
    const [data, setData] = useState('Hello World')

    const demo = () => {
        setData('Hello World Again')
    }

    console.log("UI rendered..."); // This execution of this statement shows that the whole UI is re-rendered when the state is changed

  return (
    <View>
      <Text style={styles.text}>Data value : {data}</Text>
      <TouchableOpacity onPress={demo}>
        <Text style={styles.text}>
            Click me 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ 
    text: {
        fontSize: 20
    }
})

export default UseStateDemo