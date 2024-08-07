// Add this to index.js to run this

// The main difference between state and props is that state is internal and controlled by the component itself whereas props are external and controlled by the parent component.
// State is mutable whereas props are immutable. State can be changed by the component itself whereas props can't be changed by the component itself and are used to pass data from parent to child components.

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class statesAndProps extends Component {
    constructor() {
        super();
        this.state = {
            count : 1,
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    handleDecrement = () => {
        // this.setState({count: this.state.count - 1}) // This is not the correct way to update state
        
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

  render() {
    return (
      <View style={styles.container}  >
        <Text style={styles.heading}>States And Props</Text>
        <Text style={styles.heading}>Count : {this.state.count} </Text>
        <View style={styles.buttonContainer}>
            <Button title="Increment" onPress={this.handleIncrement}/>
            <Button title="Decrement" onPress={this.handleDecrement} />
        </View>
        <Child count={this.state.count} />
      </View>
    )
  }
}

// Now we'll see how to pass data to child components using props

class Child extends Component {
    render() {
        return <Text style={styles.heading}>Count : {this.props.count}</Text>;
    }
}

export default statesAndProps

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})