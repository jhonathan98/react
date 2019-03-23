

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import inicio from './inicio';


export default class registro extends Component {
  render() {
      console.log(this.props.navigation.navigate('inicio'));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Esta es la pantalla de registro</Text>
        <Button title="Go to Details"  onPress={() =>  {this.props.navigation.navigate('inicio')}}/>
        <Button title="Registrar" onPress={() => this.props.navigation.navigate('inicio')}/>
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
