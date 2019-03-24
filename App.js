/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {createStackNavigator, createAppContainer, CardStackStyleInterpolator} from 'react-navigation';
import VotesScreen from './Components/VotesScreen';
import StatusScreen from './Components/StatusScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2a2a2a',
  },
});


const RootStack = createStackNavigator(
  {
    Home: VotesScreen,
    Status: StatusScreen,
  },
  {
    initialRouteName: 'Home',
  },
  {
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
  },
  navigationOptions = {
    headerStyle: {
      backgroundColor: "transparent"
    }
  }
);

const AppRoute = createAppContainer(RootStack);

// type Props = {};
export default class App extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <AppRoute />
        {/* <Header />
      <VotesScreen /> */}
      </View >
    );
  }
}
