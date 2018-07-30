import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Task from './Task';

const TaskList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.taskList}
        data={props.tasks}
        renderItem={({ item }) => <Task name={item.name} completed={item.completed} toggleComplete={props.toggleComplete} id={item.id}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskList: {
      width: '100%',
  }
});

export default TaskList;
