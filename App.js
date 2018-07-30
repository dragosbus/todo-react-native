import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import AddTask from './src/components/AddTask';
import TaskList from './src/components/TaskList';

const defaultProps = {};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      id: 0
    };
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete(index) {
    this.setState({
      tasks: this.state.tasks.map(t => {
        if (t.id === index) {
          t.completed = !t.completed;
          console.log(t);
        }
        return t;
      })
    });
  }

  addTaskHandler(name) {
    let newTask = {
      id: this.state.id,
      name: name,
      completed: false,
      key: `${this.state.id}-${name}`
    };
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(newTask),
      id: prevState.id + 1
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTask addTask={this.addTaskHandler} />
        <TaskList tasks={this.state.tasks} toggleComplete={this.toggleComplete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
