import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
        width: '90%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputName: {
        width: '90%',
        height: 40,
        marginTop: 30 
    }
});

export default AddTask;