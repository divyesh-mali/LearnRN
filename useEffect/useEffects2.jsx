// useEffect Hook as Component Will Unmount Lifecycle Methods

// Add this to index.js

import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const useEffects2 = () => {
    [isRenderChild, setIsRenderChild] = useState(true);
  return (
    <View>
      <Text style={styles.heading}>Component Will Unmount Method in React Native</Text>
      <Button title="Toggle Child" onPress={() => setIsRenderChild(!isRenderChild)}/>
      { isRenderChild ? <Child /> : null }  
    </View>
  )
}

const Child = () => {

    let interval = setInterval(() => {
        console.log('Calling interval');
    }, 1000);

    useEffect(() => {
        console.log('Component get mounted or dependency item state update...')
        return () => {
            clearInterval(interval); // If I remove this line, the interval will keep on running after each 1000ms i.e 1 second, even after the component is unmounted. You can check this by opening the console and clicking on the toggle button.
            console.log('Component will unmount method || Cleanup function'); // Cleanup function is basically used to clean the side effects of OR clear the memory or to clear the resources that are being used by the component.
    }; 
}, []);

    return (    
        <View>
        <Text>Child Component</Text>
        <Text>Child Component</Text>
        <Text>Child Component</Text>
        <Text>Child Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        alignSelf: 'center', 
        fontStyle: 'bold',
        fontSize: 25,
    }
})

export default useEffects2