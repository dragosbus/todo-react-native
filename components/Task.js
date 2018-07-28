import React from 'React';
import {Text, StyleSheet} from 'react-native';


const Task = props => {
    return (
        <Text>
            {props.name}
        </Text>
    );
};

export default Task;