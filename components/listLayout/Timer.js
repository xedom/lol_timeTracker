import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Vibration } from 'react-native';
import parseTime from '../../utils/parseTime';

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
      spellCounter: spellIcons[promps.spell].countdown,
      counter: spellIcons[promps.spell].countdown,
      running: false,
      step: null,
      spell: promps.spell,
      displayed: '- - : - -',
    }
  }

  resetTimer() {
    Vibration.vibrate(1000);
    clearInterval(this.state.step);
    this.setState({
      running: false,
      counter: this.state.spellCounter,
      step: null
    });
    this.setState({displayed: '- - : - -'})
  }

  onClick() {
    // Vibration.vibrate(200);
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

  decrease() {
    if (this.state.running) {
      this.setState(prev => ({ counter: prev.counter - 5 }))
      this.setState({displayed: parseTime(this.state.counter)})
    }
  }

  increase() {
    if (this.state.running) {
      this.setState(prev => ({ counter: prev.counter + 5 }))
      this.setState({displayed: parseTime(this.state.counter)})
    }
  }


  render() {
    return (
      <View style={styles.time} >
        <Image style={styles.im} source={spellIcons[this.state.spell].img} />
        <TouchableHighlight style={styles.btn2} onPress={this.decrease.bind(this)}>
          <Text style={styles.txtd}>-5</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={this.onClick.bind(this)}>
          <Text style={styles.counter}>{this.state.displayed}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn2} onPress={this.increase.bind(this)}>
          <Text style={styles.txti}>+5</Text>
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
  txti: {
    fontSize: 20,
    color: '#12ff1e'
  },
  txtd: {
    fontSize: 20,
    color: '#ff5512'
  },
  im: {
    width: 60,
    height: 60,
    marginHorizontal: 10
  },
  btn: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  btn2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 60
  }
});

export default Timer