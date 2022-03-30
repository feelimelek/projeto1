import React, {Component} from 'react';
import { StyleSheet, Button} from 'react-native';


export default class Botao extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onButtonClicked();
    }
    render() {
        return (
            <Button
                onPress={this.handleClick}
                title="Alterar Texto"
                style={styles.button}
            ></Button>
        )
    }
}


const styles = StyleSheet.create({
    button: {
      flex: 2,
      textAlign: 'center',
      justifyContent: 'end',
      backgroundColor: '#6e1f08',
      fontSize: 50
    }
  });

