/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView, Picker,Button} from 'react-native';
import * as firebase from'firebase';






const database= firebase.database();


export default class App extends Component {
 constructor(props){
    super(props)
    this.state=({
      nombre_completo:'',
      correo:'',
      contraseña:'',
      nombre_mascota:'',
      edad:'',
      tamaño_mascota:'',
      color_pelaje_mascota:''
    })
    
  }

  registrar=(nc,cU,contra,nMascota, edad, tamañoMascota,colorPelaje)=>{
    try{

      const ref= database.ref('usuarios')
      const data={
        nombre_completo:nc,
        correo:cU,
        contraseña:contra,
        nombre_mascota:nMascota,
        edad:edad,
        tamaño_mascota:tamañoMascota,
        color_pelaje_mascota:colorPelaje
      }
      ref.push(data);
      this.props.navigation.navigate('Primero')
    }
    catch(error){
      console.log(error);
    }
  
  }


  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={{fontSize:25}}>Información del dueño de mascota</Text>
          <TextInput placeholder="Nombre completo " style={styles.txtCampos} onChangeText={nombre_completo => this.setState({nombre_completo})} />
          <TextInput placeholder="Correo" style={styles.txtCampos} onChangeText={(correo) => this.setState({correo})}/>
          <TextInput type="password" placeholder="Contraseña" style={styles.txtCampos} onChangeText={(contraseña) => this.setState({contraseña})}  />
        </View>
        <View >
          <Text style={{fontSize:25}}>Información de la mascota</Text>
          <TextInput placeholder="Nombre de mascota" style={styles.txtCampos} onChangeText={(nombre_mascota) => this.setState({nombre_mascota})} />

          <TextInput placeholder="Edad de la mascota" style={styles.txtCampos} onChangeText={(edad) => this.setState({edad})}/>
          <TextInput placeholder="Tamaño de la mascosta aproximado" style={styles.txtCampos} onChangeText={(tamaño_mascota) => this.setState({tamaño_mascota})} />
          <TextInput placeholder="Color de pelaje de la mascosta" style={styles.txtCampos} onChangeText={(color_pelaje_mascota) => this.setState({color_pelaje_mascota})} />
          
        </View>
        <Button title="registrar"
        onPress={()=>this.registrar(this.state.nombre_completo,this.state.correo,this.state.contraseña,this.state.nombre_mascota,this.state.edad,this.state.tamaño_mascota,this.state.color_pelaje_mascota)}
        ></Button>
        </ScrollView>
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
  txtCampos:{
    borderWidth:1,borderColor:'#ccc',margin:10,padding:10,width:'90%',marginTop:30
  },
  button: {
    backgroundColor: '#02aacc',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 12,
    fontSize: 24,
    padding: 12,
    textAlign:'center',
    marginBottom:10
},

});