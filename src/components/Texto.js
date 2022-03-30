import React, {Component} from 'react';
import { StyleSheet, Text} from 'react-native';


export default class Texto extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text style={styles.text}>{this.props.text}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      flex: 2,
      textAlign: 'center',
      justifyContent: 'center',
      color: '#08576e',
      fontSize: 50
    }
  });

