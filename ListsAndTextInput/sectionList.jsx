// Add this to index.js

import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const sectionList = () => {

    const sectionData = [
        {
            title: "Section A",
            data: ["Section A1", "Section A2"]
        },

        {
            title: "Section B",
            data: ["Section B1", "Section B2"]
        },

        {
            title: "Section C",
            data: ["Section C1", "Section C2"]
        },

        {
            title: "Section D",
            data: ["Section D1", "Section D2"]
        }
    ];

    const renderSectionData = ({ item }) => {
        console.log('item: ', item);
        return (
            <View>
                <Text style={styles.subHeading}>{item}</Text>
            </View>
        )
        
    }

  return (
    <View>
      <SectionList 
      sections={sectionData} 
      renderItem={renderSectionData} 
      renderSectionHeader={({ section: { title }}) => {
        console.log('title: ', title);
        return(
            <Text style={{ fontSize: 25, color: "purple", fontWeight: 500}}>
                {title}
            </Text>
        )
        
      }} />
    </View>
  )
}

export default sectionList

const styles = StyleSheet.create({
    subHeading: {
        fontSize: 15,
        color: 'black',
    }
})