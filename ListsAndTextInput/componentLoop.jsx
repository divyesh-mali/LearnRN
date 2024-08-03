// Add this to index.js

// This program demonstrates component loop with Flat list

import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const componentLoop = () => {

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

const NameComponent = ({ item }) => {
    return (
        <View>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );
}

return (
    <View>
        <FlatList
            data={data}
            renderItem={({ item }) => <NameComponent item={item} />}
            keyExtractor={(item) => item.id}
            />
    </View>
)

}
export default componentLoop

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
    }
})