

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import registro from './registro';

export default class inicio extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Esta es la pantalla de inicio</Text>
            <Button title="Registrar" onPress={() => this.props.navigation.navigate('registro')}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
