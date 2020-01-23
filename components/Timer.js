import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function Timer({ time }) {
    return (
      <View style={styles.time}>
        <Text style={styles.counter}>{time}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  time: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  counter: {
    fontSize: 40,
    color: '#eee'
  }
});

export default Timer