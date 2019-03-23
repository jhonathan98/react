// Login.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import * as firebase from'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';


YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const config = {
  apiKey: "AIzaSyDfv6VwlJo7AqR4bL3yJzQ9wCIjLio8GzM",
  authDomain: "fir-react-7cd00.firebaseapp.com",
  databaseURL: "https://fir-react-7cd00.firebaseio.com",
  projectId: "fir-react-7cd00",
  storageBucket: "fir-react-7cd00.appspot.com",
  messagingSenderId: "994381481538"
};
firebase.initializeApp(config);

const database= firebase.database();
const ref= database.ref('usuarios')

export default class App extends Component {
 constructor(props){
    super(props)
    this.state=({
      email:'',
      passwrod:'',
      listingData:[]
    })
  }
  componentWillMount(){
    const that = this;
    let q = firebase.database().ref('usuarios');
    const finished = [];
    q.once('value', snapshot => {
      snapshot.forEach(function(data) {
        let result = data.val();
        result["key"]  = data.key;
        finished.push(result);
      })
    }).then(function(){
      that.setState({
        listingData:  finished
      }) 
    })
  }
  ingresar=(email,password) =>{
  usuarios=this.state.listingData.map(aber =>aber.correo)
  contraseñas=this.state.listingData.map(aber2=>aber2.contraseña)
  for( i=0; i<usuarios.length;i++){
    if(email===usuarios[i] && password===contraseñas[i]){
      alert("logueado Señor usuario")
      this.props.navigation.navigate('CodigoQR')
    }
  }
 
  }
 

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Usuario" style={styles.txtCampos} onChangeText={(email) => this.setState({email})} />
        <TextInput placeholder="Contraseña" style={styles.txtCampos} onChangeText={(password) => this.setState({password})} />
       <View style={{   flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',  alignContent: 'space-between'}}>
          <TouchableOpacity onPress={()=>this.ingresar(this.state.email,this.state.password)} style={styles.button}>
            <Text>Ingresar</Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Segundo')} style={styles.button}>
           <Text>Registrarse</Text>
         </TouchableOpacity>
        </View>
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