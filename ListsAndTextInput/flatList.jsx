// Add this to index.js

// The FlatList component is a core component designed to display a scrollable list of items. The FlatList component is a more advanced version of the ScrollView component. It is more efficient than the ScrollView component because it only renders the items that are currently visible on the screen. The FlatList component is commonly used to display a list of items that are fetched from an API or stored in an array.

import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
    {id: 1, name: 'John Smith'},
    {id: 2, name: 'Martin Doe'},
    {id: 3, name: 'Nathan Myers'},
    {id: 4, name: 'Peter Johnson'},
    {id: 5, name: 'Margret Simpson'},
    {id: 6, name: 'Tony Stark'},
    {id: 7, name: 'Steve Rogers'},
    {id: 8, name: 'Bruce Banner'},
    {id: 9, name: 'Natasha Romanoff'},
    {id: 10, name: 'Clint Barton'},
    {id: 11, name: 'Wanda Maximoff'},
    {id: 12, name: 'Vision'},
    {id: 13, name: 'Thor'},
    {id: 14, name: 'Loki'},
    {id: 15, name: 'Thanos'},
    {id: 16, name: 'Nick Fury'},
    {id: 17, name: 'Maria Hill'},
    {id: 18, name: 'Phil Coulson'},
    {id: 19, name: 'Pepper Potts'},
    {id: 20, name: 'James Rhodes'},
    {id: 21, name: 'Happy Hogan'},
    {id: 22, name: 'Sam Wilson'},
    {id: 23, name: 'Bucky Barnes'},
    {id: 24, name: 'Scott Lang'},
    {id: 25, name: 'Hope van Dyne'},
    {id: 26, name: 'Stephen Strange'},
    {id: 27, name: 'Wong'},
    {id: 28, name: 'Mantis'},
    {id: 29, name: 'Drax'},
    {id: 30, name: 'Groot'},
]

const flatList = () => {
  return (
    <View>
      <FlatList 
        data={data}
        renderItem={({ item }) => {
            return (
                <View>
                    <Text style={styles.name}>{item.id + ". " + item.name}</Text>
                </View>
            );
        }}
        keyExtractor={(item) => item.id} // keyExtractor is a function that takes an item from the data array and returns a unique key for that item. The keyExtractor function is used by the FlatList component to keep track of the items in the list and efficiently update the list when items are added, removed, or reordered.
        />
    </View>
  )
}

export default flatList

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
    }
})