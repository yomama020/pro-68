import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNaviator } from 'react-navigation-tabs'

import Facebook from './screens/fb'
import Instagram from './screens/in';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Social Media Launcher</Text>
    <AppContainer/>
      </View>
    );
  }
  
}

const TabNavigator = createBottomTabNavigator({
Facebook:{screen:Facebook},
Instagram:{screen:Instagram},
})

const AppContainer = createAppContainer (TabNavigator);

const styles = StyleSheet.create({
  text:{
fontColor: 'turquoise',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
