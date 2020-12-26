import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ChampIcon from './ChampIcon';
import ChampTimers from './ChampTimers';

function ChampBox({ role, spells }) {
  return (
    <View style={styles.champBox}>
      <ChampIcon img={role} />
      <ChampTimers spells={spells} />
    </View>
  )
}

const styles = StyleSheet.create({
  champBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#111',
    margin: 2,
    borderRadius: 22,
    overflow: 'hidden'
  },
});

export default ChampBox