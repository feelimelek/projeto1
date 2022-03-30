import React, {Component} from 'react';
import { StyleSheet, Button, View} from 'react-native';


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
            <View >
                <Button  
                    style={styles.btn}      
                    onPress={this.handleClick}
                    title="Alterar Texto"
                >
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#6e1f08',
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
    }
});