import React, {Component, useState } from 'react';
import { StyleSheet, TextInput, Text, View} from 'react-native';


export default class InputTexto extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(textoNovo) {
        this.props.onTextChange(textoNovo);
    }

    render() {
        const textChanged = this.props.text;
        return (
            <View style={styles.view}>
                 <TextInput
                     style = {{color: "#6e1f08", fontSize: 50, borderBottomWidth: 2, margin: 15, textAlign: 'center', borderColor: '#08576e'}}
                     defaultValue = 'Digite Aqui'
                     onChangeText = {(textoNovo) => {this.handleTextChange(textoNovo)}}
                 />
             </View>
         );
    }
}

const styles = StyleSheet.create({
    view: {
      flex: 12,
      alignContent: 'center',
      justifyContent: 'center'
    }
});