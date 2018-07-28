import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Task from './Task';

const TaskList = props =>{
    return(
        <ScrollView style={styles.taskList}>
            {props.tasks.map((task,i)=><Task key={i} name={task.name}/>)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    taskList: {
        flex: 2
    }
});

export default TaskList;