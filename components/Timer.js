import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Vibration } from 'react-native';
import parseTime from '../utils/parseTime';
import SoundPlayer from 'react-native-sound-player';

const spellIcons = {
  heal: { img: require('../assets/spells/heal.jpg'), countdown: 240 },
  smite: { img: require('../assets/spells/smite.jpg'), countdown: 15 },
  flash: { img: require('../assets/spells/flash.jpg'), countdown: 300 },
  ghost: { img: require('../assets/spells/ghost.jpg'), countdown: 180 },
  ignite: { img: require('../assets/spells/ignite.jpg'), countdown: 180 },
  exhaust: { img: require('../assets/spells/exhaust.jpg'), countdown: 210 },
  barrier: { img: require('../assets/spells/barrier.jpg'), countdown: 180 },
  teleport: { img: require('../assets/spells/teleport.jpg'), countdown: 360 },
}

class Timer extends Component {
  constructor(promps) {
    super(promps)

    this.state = {
      counter: spellIcons[promps.spell].countdown,
      running: false,
      step: null,
      spell: promps.spell,
      displayed: '- - : - -',
    }

  }

  resetTimer() {
    Vibration.vibrate(2000);
    SoundPlayer.playUrl('https://octafox.it/test/alarm1.mp3') // https://octafox.it/test/alarm1.mp3
    clearInterval(this.state.step);
    this.setState({
      running: false,
      counter: 15,
      step: null
    });
    this.setState({displayed: '- - : - -'})
  }

  onClick() {
    Vibration.vibrate(200);
    if (this.state.running) {
      this.resetTimer()
    } else {
      this.setState({
        running: true,
        step: setInterval(() => {
          if (this.state.counter > 0) {
            this.setState(prev => ({counter: prev.counter - 1}))
            this.setState({displayed: parseTime(this.state.counter)})
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
        <Image style={styles.im} source={spellIcons[this.state.spell].img} />
        <TouchableHighlight style={styles.button} onPress={this.onClick.bind(this)}>
          <Text style={styles.counter}>{this.state.displayed}</Text>
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
    alignItems: 'center'
  }
});

export default Timer