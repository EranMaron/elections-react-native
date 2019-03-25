import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, PropTypes } from 'react-native'
import { withNavigation } from 'react-navigation'
import Button from 'react-native-button'

import headerImg from '../images/elections.jpg'

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: 150
  },
  headerText: {
    fontSize: 35,
    margin: 0,
    padding: 0,
    color: '#fff',
    right: 25,
    fontWeight: 'bold'
  },
  textContainer: {
    position: 'absolute',
    width: '80%',
    top: 15
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 50,
    top: 15,
    left: 330
  },
  button: {
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 8
  },
  imgBg: {
    width: '100%',
    height: '100%'
  }
})

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground source={headerImg} style={styles.imgBg}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>בחירות 2019</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate(`${this.props.goToScreen}`)}
            >
              {this.props.goToScreen}
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

// Header.propTypes = {
//   goToScreen: PropTypes.string,
//   navigation: PropTypes.func,
//   navigate: PropTypes.string
// }

export default withNavigation(Header)
