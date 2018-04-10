import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native';

class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native for {Platform.OS}!!!!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.{Platform.OS}.js YA!
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    { Platform.OS !== "web"?"Cmd+D or shake for dev menu":"" }
                </Text>
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
});

export default Intro;