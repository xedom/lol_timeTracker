import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const laneIcons = {
  top: require('../assets/lanes/TOP.png'),
  jungle: require('../assets/lanes/JUNGLE.png'),
  middle: require('../assets/lanes/MIDDLE.png'),
  support: require('../assets/lanes/SUPPORT.png'),
  adc: require('../assets/lanes/ADC.png'),
}

function ChampIcon({ img }) {
  return (
    <View style={styles.champIcon}>
      <Image style={styles.im} source={laneIcons[img]} />
    </View>
  )
}

const styles = StyleSheet.create({
  champIcon: {
    flex: 1,
    backgroundColor: '#111',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  im : {
    width: 60,
    height: 60,
  }
});

export default ChampIcon