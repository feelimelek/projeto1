import React, {Component, useState } from 'react';
import { StyleSheet, TextInput, Text} from 'react-native';


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
            < >
                 <TextInput style={styles.input}
                     style = {{color: "red"}}
                     defaultValue = 'Digite Aqui'
                     onChangeText = {(textoNovo) => {this.handleTextChange(textoNovo)}}
                 />
             </>
         );
    }
    
 
}

const styles = StyleSheet.create({
    input: {
        flex: 2,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#6e1f08',
        fontSize: 50

    }
})