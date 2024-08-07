// Add this to index.js

// useEffect is a hook that allows you to perform side effects in function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
// Its is called after the component is rendered to the screen. Its second argument is an array of dependencies. If the dependencies are not provided, the hook will run after every render. If the dependencies are provided, the hook will run only if the dependencies have changed.
// It is basically used while fetching data from an API, updating the DOM, etc.

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const useEffects = () => {

    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log('useEffect called');
        
    }, [] )

  return (
    <View>
      <Text>useEffects</Text>
    </View>
  )
}

export default useEffects