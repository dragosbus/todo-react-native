import React from 'React';
import {Text, StyleSheet} from 'react-native';


const Task = props => {
    return (
        <Text style={styles.task}>
            {props.name}
        </Text>
    );
};

const styles = StyleSheet.create({
    task: {
        width: '80%',
        marginTop: 15,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'rgba(2,2,2,0.25)',
        borderRadius: 5,
        padding: 10
    }
});

export default Task;