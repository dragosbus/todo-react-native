import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
        this.changeName = this.changeName.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    changeName(text) {
        this.setState({name: text})
    }

    addTask() {
        this.props.addTask(this.state.name);
    };

    render() {
        return(
            <View style={styles.form}>
                <TextInput
                    style={styles.inputName}
                    value={this.state.name}
                    onChangeText={this.changeName}
                    underlineColorAndroid="transparent"
                    placeholder="Type a task"
                />
                <TouchableOpacity onPress={this.addTask}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    inputName: {
        width: '80%',
        height: 40,
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'rgba(3,3,3,0.2)',
        borderRadius: 3,
        padding: 10
    }
});

export default AddTask;