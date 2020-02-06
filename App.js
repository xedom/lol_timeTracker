import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ChampBox from './components/ChampBox.js';


export default class App extends Component {
  constructor(promps) {
    super(promps)
    this.state = {
      champ: [
        { id: 1, lane: 'top', spells: [ 'teleport', 'flash', ] },
        { id: 2, lane: 'jungle', spells: [ 'smite', 'flash', ] },
        { id: 3, lane: 'middle', spells: [ 'ignite', 'flash', ] },
        { id: 4, lane: 'support', spells: [ 'exhaust', 'flash', ] },
        { id: 5, lane: 'adc', spells: [ 'heal', 'flash', ] },
      ]
    };
  }

  render() {
    const champ = this.state.champ.map(champ => <ChampBox key={champ.id} role={champ.lane} spells={champ.spells} />)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LOL Time Tracker</Text>
        </View>
        {champ}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleContainer: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#eee',
  },
});
