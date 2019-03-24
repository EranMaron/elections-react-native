// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableHighlight, Alert} from 'react-native';



const Images = {
    likud: require('../images/likud.jpg'),
    avoda: require('../images/avoda.jpg'),
    kahollavan: require('../images/kahollavan.jpg'),
    merez: require('../images/merez.jpg'),
    kulanu: require('../images/kulanu.jpg'),
    yaminhadash: require('../images/yaminhadash.jpg'),
    israelbeitenu: require('../images/israelbeitenu.jpg'),
    shas: require('../images/shas.jpg'),
    yahaduthatora: require('../images/yahaduthatora.jpg'),
    raamtaal: require('../images/raamtaal.jpg'),
    balad: require('../images/balad.jpg'),
    zehut: require('../images/zehut.jpg'),
    gesher: require('../images/gesher.jpg'),
    ihudmiflagothayamin: require('../images/ihudmiflagothayamin.jpg'),
    magen: require('../images/magen.jpg')
}


const styles = StyleSheet.create({
    card: {
        position: 'relative',
        // alignItems: 'center',
        width: '48%',
        height: 150,
        marginBottom: 15
    },
    cardTitle: {
        position: 'absolute',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    touch: {
        width: '100%',
        height: '100%',
        zIndex: 100
    }
})


export default class Card extends Component {

    onPress = () => {
        Alert.alert(
            'You Are Going To Vote!',
            `Are You Sure You Want To Vote To ${this.props.name}`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log("Cancelled"),
                    style: "cancel"
                },
                {
                    text: "Yes, I'm Sure",
                    onPress: () => this.voteSubmision()
                }
            ],
            {cancelable: false},
        );
    }

    voteSubmision = () => {
        const partie = this.props.name;
        console.log(`Voted to ${partie}`);
        fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${partie}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res =>
                // console.log(res)
                Alert.alert(`${this.props.name} Is Very Appreciate You For Voting Them!`),
            )
            .catch(err => console.log(err));
    }

    render() {
        let name = this.props.name;
        let imgName = name.replace('-', '').replace('-', '');
        console.log(typeof Images[imgName]);
        // console.log(name);
        // console.log(imgName);
        return (
            <View style={styles.card}>
                <TouchableHighlight
                    style={styles.touch}
                    underlayColor='#2a2a2a'
                    onPress={this.onPress}
                >
                    <ImageBackground source={Images[imgName]} style={{width: '100%', height: '100%'}}>
                        <Text style={styles.cardTitle}>
                            {this.props.name}
                        </Text>
                    </ImageBackground>
                </TouchableHighlight>
            </View >
        );
    }
}