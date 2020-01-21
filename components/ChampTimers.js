import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Timer from './Timer';

function ChampTimers() {
  return (
    <View style={styles.champTimers}>
      <Timer time="--:--" />
      <Timer time="--:--" />
    </View>
  )
}

const styles = StyleSheet.create({
  champTimers: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default ChampTimers