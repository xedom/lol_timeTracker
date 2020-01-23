import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const laneIcons = {
  TOP: 'https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/TOP.png',
  JUNGLE: 'https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/JUNGLE.png',
  MIDDLE: 'https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/MIDDLE.png',
  SUPPORT: 'https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/SUPPORT.png',
  ADC: 'https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/ADC.png',
}

function ChampIcon({ img }) {
  return (
    <View style={styles.champIcon}>
      <Image
        style={styles.im}
        source={{uri: laneIcons[img]}}
      />
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