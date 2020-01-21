import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ChampBox from './components/ChampBox.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: .5}}></View>
        <ChampBox role="TOP" />
        <ChampBox role="JUNGLE" />
        <ChampBox role="MIDDLE" />
        <ChampBox role="SUPPORT" />
        <ChampBox role="ADC" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});
