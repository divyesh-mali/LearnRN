// Add this to index.js

import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const componentDidUpdate = () => {

    const [count, setCount] = useState(0);
    const  [ data, setData ] = useState(5);

    // Until and unless the dependency element state is not changed, the useEffect will not be called.
    // useEffect has two arguments. First is the function that you want to call and second is the dependency element.
    // If you dont provide the dependency element, then useEffect will be called after every render.
    // here, at first, useEffect will be called when component is mounted. But after that, it will be called only when the dependency element state will change.
    useEffect( () => {
        console.log('Inside useEffect you can call API');
    }, [count] ) // SYntax : useEffect(function, [dependency element])

  return (
    <View>
      <Text style={styles.heading}>Count is : {count}</Text>
      <Text style={styles.heading}>Data is : {data}</Text>
      <Button title="Increment" onPress={ () => setCount(count + 1)}/>

        <Child count={count} />
    </View>
  )
}

export default componentDidUpdate


export const Child = () => {
    useEffect( () => {
        console.log('Child component useEffect called');
    }, [] )

    return (
        <View>
            <Text style={styles.heading}>Child Component</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})