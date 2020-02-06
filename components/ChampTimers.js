import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Timer from './Timer';

function ChampTimers({ spells }) {
  return (
    <View style={styles.champTimers}>
      <Timer spell={spells[0]}/>
      <Timer spell={spells[1]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  champTimers: {
    flex: 5,
  },
});

export default ChampTimers