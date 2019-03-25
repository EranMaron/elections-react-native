import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Alert } from 'react-native'
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
    width: '48%',
    height: 150,
    marginBottom: 15
  },
  imageBg: {
    width: '100%',
    height: '100%'
  },
  cardTitle: {
    position: 'absolute',
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  touch: {
    width: '100%',
    height: '100%',
    zIndex: 100
  }
})

export default class Card extends Component {
  constructor() {
    super()
    this.handleOnPress = this.handleOnPress.bind(this)
    this.voteSubmision = this.voteSubmision.bind(this)
  }

  handleOnPress() {
    Alert.alert(
      'You Are Going To Vote!',
      `Are You Sure You Want To Vote To ${this.props.name}`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: "Yes, I'm Sure",
          onPress: () => this.voteSubmision()
        }
      ],
      { cancelable: false }
    )
  }

  voteSubmision() {
    const party = this.props.name
    fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${party}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => Alert.alert(`${this.props.name} Is Very Appreciate You For Voting Them!`))
      .catch(err => Alert.alert(err))
  }

  render() {
    const _name = this.props.name
    const imgName = _name.replace('-', '').replace('-', '')
    return (
      <View style={styles.card}>
        <TouchableHighlight
          style={styles.touch}
          underlayColor="#2a2a2a"
          onPress={this.handleOnPress}
        >
          <ImageBackground source={Images[imgName]} style={styles.imageBg}>
            <Text style={styles.cardTitle}>{_name}</Text>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired
}
