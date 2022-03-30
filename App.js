/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component, useState} from 'react';

 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Alert
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import Texto from './src/components/Texto';
 import InputTexto from './src/components/InputTexto';
 import Botao from './src/components/Botao';

 
 export default class App extends Component {
  constructor(props) {
    super(props);
    this.storeTextChange = this.storeTextChange.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {
      textoGuardado: '',
      textoExposto: 'Texto Inicial',
      botaoAcionado: false
    }
  }

  storeTextChange(texto) {
    if(texto === '') {
      texto = 'CAMPO VAZIO';
    }
    this.setState({textoGuardado: texto});
  }
  
  changeText(texto) {
      this.setState({textoExposto: texto})
  }
    
  


  handleButtonClick() {
    this.setState({botaoAcionado: true});
    this.changeText(this.state.textoGuardado);
  }

   render() {
     return (
     <View style={styles.view}>
      <Texto text = {this.state.textoExposto}></Texto>
      <InputTexto text = '' onTextChange = {this.storeTextChange}></InputTexto>
      <Botao onButtonClicked = {this.handleButtonClick}
      ></Botao> 
     </View>);
   }
    
 }

 
 
 const styles = StyleSheet.create({
   view: {
     flex: 1,
     alignContent: 'center',
     justifyContent: 'center'
   }
 });
 