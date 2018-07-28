import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{name:'hi'}]
    }
    this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  addTaskHandler(name) {
    this.setState(prevState=> (
      {
        tasks: prevState.tasks.concat({name})
      }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
       <AddTask addTask={this.addTaskHandler}/>
       <TaskList tasks={this.state.tasks}/>
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
