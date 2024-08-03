// Add this to index.js
// You can find about inline and internal styling in my another repo mentioned in README.md
// This is external styling

import { View, Text } from 'react-native'
import React from 'react'
import { externalStyles } from './styles' // Make sure to import the 'externalStyles' object with curly braces {} otherwise it would consider it as default import and give error

const externalStyling = () => {
  return (
    <View>
      {/* Figure out why external styling is not working... */}
      <Text style={externalStyles.heading}>Demo text for external styling</Text>
    </View>
  )
}

export default externalStyling