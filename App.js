import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  CardStackStyleInterpolator
} from 'react-navigation'
import VotesScreen from './Components/VotesScreen'
import StatusScreen from './Components/StatusScreen'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2a2a2a'
  }
})

const RootStack = createStackNavigator(
  {
    Home: VotesScreen,
    Status: StatusScreen
  },
  {
    initialRouteName: 'Home'
  },
  {
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent'
      }
    }
  }
)

const AppRoute = createAppContainer(RootStack)

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <AppRoute />
      </View>
    )
  }
}
