// import React from 'react'
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import the different screens
import Primero from './components/Primero'
import Segundo from './components/Segundo'
import CodigoQR from './components/CodigoQR'
// create our app's navigation stack
const App = createAppContainer(createSwitchNavigator(
  {
    Primero,
    Segundo,
    CodigoQR,
  },
  {
    initialRouteName: 'Primero'
  }
))
export default App
