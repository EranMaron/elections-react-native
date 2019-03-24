import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Button from 'react-native-button';
import Card from './Card';
import Header from './Header';



const styles = StyleSheet.create({
    scrollCardsContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#2a2a2a',

    },
    cardsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    loadingMsg: {
        color: '#fff',
        fontSize: 40,
        height: '100%',
        paddingTop: 200,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a2a2a',

    }
})

export default class VotesScreen extends Component {

    static navigationOptions = {
        header: () => <Header goToScreen={"Status"} />,
    };

    constructor(props) {
        super(props);
        this.state = {
            parties: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        console.log("In DidMount");
        fetch('https://isr-elections.herokuapp.com/api/parties')
            .then(res => res.json())
            .then(result => {
                console.log(result.parties)
                this.setState({
                    parties: result.parties,
                    isLoaded: true
                })
            }).catch(err => console.log(err));
    }

    eachParties = (party, i) => {
        return <Card
            name={party.id}
            key={party.id}
            index={i}
        />
    }

    render() {
        if (!this.state.isLoaded) {
            console.log("Loading")
            return (
                <View>
                    <Text style={styles.loadingMsg}>Loading...</Text>
                </View>
            )
        }
        return (
            <ScrollView style={styles.scrollCardsContainer}>
                <View style={styles.cardsContainer}>
                    {this.state.parties.map(this.eachParties)}
                </View>
            </ScrollView>
        )
    }
}