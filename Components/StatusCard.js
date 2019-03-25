import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

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
    width: '100%',
    height: 80,
    marginBottom: 10,
    paddingBottom: 5,
    borderStyle: 'dotted',
    borderBottomWidth: 2,
    borderBottomColor: '#444'
  },
  imageBg: {
    width: '50%',
    height: '100%'
  },
  range: {
    position: 'absolute',
    width: 100,
    height: 40,
    right: 30,
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    margin: 0,
    padding: 0
  },
  cardTitle: {
    position: 'absolute',
    color: '#fff',
    fontSize: 25,
    left: 120,
    bottom: 0,
    width: '60%'
  }
})

export default class StatusCard extends Component {
  render() {
    const name = this.props.name
    const currentVotes = this.props.partyVotes
    const totalVotes = this.props.totalVotes
    const precent = ((currentVotes / totalVotes) * 100).toFixed(2)
    const imgName = name.replace('-', '').replace('-', '')
    return (
      <View style={styles.card}>
        <ImageBackground source={Images[imgName]} style={styles.imageBg} />
        <Text style={styles.cardTitle}>{this.props.name}</Text>
        <Text style={styles.range}>{`${precent}%`}</Text>
      </View>
    )
  }
}

StatusCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalVotes: PropTypes.number.isRequired,
  partyVotes: PropTypes.number.isRequired
}
