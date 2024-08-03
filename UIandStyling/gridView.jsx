// Add this to index.js

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const gridView = () => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>
        <View >
            <Text style={styles.name}>John</Text>
        </View>

        <View>
            <Text style={styles.name}>Peter</Text>
        </View>

        <View>
            <Text style={styles.name}>Henry</Text>
        </View>

        <View>
            <Text style={styles.name}>Doraemon</Text>
        </View>

        <View>
            <Text style={styles.name}>Hattori</Text>
        </View>

        <View>
            <Text style={styles.name}>Kenichi</Text>
        </View>

        <View>
            <Text style={styles.name}>Amara</Text>
        </View>
      
    </View>
  )
}

export default gridView

const styles = StyleSheet.create({
    name: {
        fontSize: 25,
        backgroundColor: 'pink',
        padding: 20,
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 5,
    },

    title: {
        fontSize: 20,
        backgroundColor: 'purple',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 20,
        marginHorizontal: 5,
        gap: 10,
    }

})