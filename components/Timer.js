import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import parseTime from '../utils/parseTime'

class Timer extends Component {
  constructor(promps) {
    super(promps)

    this.state = {
      counter: 300,
      running: false,
      step: null,
    }

  }

  onClick() {
    if (this.state.running) {
      clearInterval(this.state.step)
      this.setState({
        running: false,
        counter: 300,
        step: null
      })
    } else {
      this.setState({
        running: true,
        step: setInterval(() => {
          this.setState(prev => ({counter: prev.counter - 1}))
        }, 1000)
      })
    }
  }

  render() {
    return (
      <TouchableHighlight style={styles.time} onPress={this.onClick.bind(this)}>
        <Text style={styles.counter}>{parseTime(this.state.counter)}</Text>
      </TouchableHighlight>
    )
  }
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