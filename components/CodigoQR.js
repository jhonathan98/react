// Login.js
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import * as firebase from'firebase';

export default class Primero extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Esta es la pantalla del codigo QR</Text>
        <QRCode
        value="jhonathan"
        color="purple"
        />
        <Button
          style={styles.btn}
          title="Segundo"
          onPress={() => this.props.navigation.navigate('Primero')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    width: '90%',
    margin: 10,
    fontSize: 30
  },
  btn: {
    width: '90%'
  }
})