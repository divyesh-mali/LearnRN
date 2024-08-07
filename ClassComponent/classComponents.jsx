import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

class classComponents extends Component {

    // To handle events in class components, we need to define a function without variable name like given below
    // You cant use 'const' or 'let' keyword to define a function in class components
    handlePress = () => {
        console.log('Button pressed');
        
    }

    render() {
        return (
            <View>
                <Child/>
                <Text>Hey Class Components</Text>
                <Button title="Press me" onPress={this.handlePress} />{/* To access that function which is created without variable name, use 'this' keyword */}
            </View>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <View>
                <Text>Child Component</Text>
            </View>
        );
    }
}

export default classComponents