import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddTask from './components/AddTask';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <AddTask/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
