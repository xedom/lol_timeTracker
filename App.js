import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ChampBox from './components/ChampBox.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: .5}}></View>
        <ChampBox role="top" />
        <ChampBox role="jungle" />
        <ChampBox role="middle" />
        <ChampBox role="support" />
        <ChampBox role="adc" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
