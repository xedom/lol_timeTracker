import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const laneIcons = {
  top: require('../assets/lanes/top.png'),
  jungle: require('../assets/lanes/jungle.png'),
  middle: require('../assets/lanes/middle.png'),
  support: require('../assets/lanes/support.png'),
  adc: require('../assets/lanes/adc.png'),
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