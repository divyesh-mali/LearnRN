// Add this to index.js
import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const conditionalRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View>
      <Text style={styles.heading}>Conditional Rendering</Text>
      {isLoggedIn ? (
        <Button title="Log out" onPress={ () => setIsLoggedIn(false) } />
        ) : (
            <Button title="Log in" onPress={() => setIsLoggedIn(true) }/>
        ) }

        {isLoggedIn ? <LoggedIn /> : <LoggedOut />}{/* Here, when I wrote 'loggedIn' instead of 'LoggedIn', it gave error. On asking copilot it said that 'loggedIn' is not valid jsx syntax so you have to write 'LoggedIn' as a valid syntax. */}
    </View>
  )
}

const LoggedIn = () => {
    return (
        <View>
            <Text>Logged in</Text>
        </View>
    )
}

const LoggedOut = () => {
    return (
        <View>
            <Text>Logged out</Text>
        </View>
    )
}

export default conditionalRendering

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})