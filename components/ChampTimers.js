import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Timer from './Timer';

function ChampTimers() {
  return (
    <View style={styles.champTimers}>
      <Timer time="00:00" />
      <Timer time="--:--" />
    </View>
  )
}

const styles = StyleSheet.create({
  champTimers: {
    flex: 5,
  },
});

export default ChampTimers