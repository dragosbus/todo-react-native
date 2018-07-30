import React from 'React';
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Task = props => {
  return (
    <View style={styles.task}>
      <Switch value={props.completed} onValueChange={()=>props.toggleComplete(props.id)} />
      <Text>{props.name}</Text>
      <ScrollView style={styles.scrollRemoveBtn}>
          <TouchableOpacity style={styles.removeBtn}>
              <Text style={styles.removeBtnText}>Remove</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: 'rgba(2,2,2,0.25)',
    borderRadius: 5,
    padding: 10
  },
  taskName: {
      fontSize: 30,
      marginLeft: 30
  },
  scrollRemoveBtn: {
      width: 100
  },
  removeBtn: {
      borderWidth: 1
  },
  removeBtnText: {
      backgroundColor: 'red',
      color: '#fff'
  }
});

export default Task;
