import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Task from './Task';

const TaskList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.taskList}
        data={props.tasks}
        renderItem={({ item }) => <Task key={item.id} name={item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskList: {
      width: '100%',
  }
});

export default TaskList;
