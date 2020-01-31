import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import parseTime from '../utils/parseTime'

// const spellIcons = {
//   exhaust: require('../assets/spells/exhaust.jpg'),
//   flash: require('../assets/spells/flash.jpg'),
//   ghost: require('../assets/spells/ghost.jpg'),
//   heal: require('../assets/spells/heal.jpg'),
//   teleport: require('../assets/spells/teleport.jpg'),
// }

class Timer extends Component {
  constructor(promps) {
    super(promps)

    this.state = {
      counter: 15,
      running: false,
      step: null,
    }

  }

  resetTimer() {
    clearInterval(this.state.step);
    this.setState({
      running: false,
      counter: 15,
      step: null
    });
  }

  onClick() {
    if (this.state.running) {
      this.resetTimer()
    } else {
      this.setState({
        running: true,
        step: setInterval(() => {
          if (this.state.counter > 0) {
            this.setState(prev => ({counter: prev.counter - 1}))
          } else {
            this.resetTimer()
          }
        }, 1000)
      })
    }
  }

  render() {
    return (
      <View style={styles.time} >
        <Image style={styles.im} source={require('../assets/spells/flash.jpg')} />
        <TouchableHighlight style={styles.button} onPress={this.onClick.bind(this)}>
          <Text style={styles.counter}>{parseTime(this.state.counter)}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  time: {
    flex: 1,
    backgroundColor: '#202020',
    // justifyContent: 'space-around',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row'
  },
  counter: {
    fontSize: 40,
    color: '#eee'
  },
  im: {
    width: 60,
    height: 60,
    marginHorizontal: 10
  },
  button: {
    flex: 1,
  }
});

export default Timer