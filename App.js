import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ChampBox from './components/ChampBox.js';


export default class App extends Component {
  constructor(promps) {
    super(promps)
    this.state = {
      champ: [
        { id: 1, lane: 'top', spells: [ 'flash', 'teleport' ] },
        { id: 2, lane: 'jungle', spells: [ 'flash', 'smite' ] },
        { id: 3, lane: 'middle', spells: [ 'flash', 'ignite' ] },
        { id: 4, lane: 'support', spells: [ 'flash', 'exhaust' ] },
        { id: 5, lane: 'adc', spells: [ 'flash', 'heal' ] },
      ]
    };
  }

  render() {
    const champ = this.state.champ.map(champ => <ChampBox key={champ.id} role={champ.lane} spells={champ.spells} />)
    return (
      <View style={styles.container}>
        <View style={{flex: .5}}></View>
        {champ}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
