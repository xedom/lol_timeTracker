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
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
  }
});

export default Timer