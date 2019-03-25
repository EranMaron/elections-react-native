import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import Header from './Header'
import StatusCard from './StatusCard'

const styles = StyleSheet.create({
  loadingMsg: {
    color: '#fff',
    fontSize: 40,
    height: '100%',
    paddingTop: 200,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a2a2a'
  },
  scrollCardsContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#2a2a2a'
  },
  cardsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between'
  }
})

export default class StatusScreen extends Component {
  static navigationOptions = {
    header: () => <Header goToScreen="Home" />
  }

  constructor() {
    super()
    this.state = {
      parties: [],
      totalVotes: 0,
      isLoaded: false
    }

    this.eachParty = this.eachParty.bind(this)
  }

  componentDidMount() {
    fetch(`https://isr-elections.herokuapp.com/api/parties/poll-status`)
      .then(res => res.json())
      .then(result => {
        const tempArr = Object.entries(result)
        for (let i = 0; i < tempArr.length; i++) {
          tempArr[i][1] = Object.entries(tempArr[i][1])
          tempArr[i][1] = tempArr[i][1][0][1]
        }
        tempArr.sort((a, b) => {
          return b[1] - a[1]
        })
        let count = 0
        for (let i = 0; i < tempArr.length; i++) {
          count += tempArr[i][1]
        }
        this.setState({
          parties: tempArr.slice(0, 5),
          totalVotes: count,
          isLoaded: true
        })
      })
      .catch(err => Alert.alert(err))
  }

  eachParty(party, i) {
    return (
      <StatusCard
        name={party[0]}
        partyVotes={this.state.parties[i][1]}
        totalVotes={this.state.totalVotes}
        key={party[0]}
        index={i}
      />
    )
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <View>
          <Text style={styles.loadingMsg}>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.scrollCardsContainer}>
        <View style={styles.cardsContainer}>{this.state.parties.map(this.eachParty)}</View>
      </ScrollView>
    )
  }
}
