import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import SubmitButton from './SubmitButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    const {inputValue, todos} = this.state;

    if (!inputValue.trim()) return;

    const updatedTodos = [
      ...todos,
      {
        title: inputValue,
        todoIndex: todos.length,
        complete: false
      }
    ];

    // ADDED FIX: capture value before state updates
    const newTodo = inputValue;

    this.setState({
      todos: updatedTodos,
      inputValue: ''
    });

    // FIX: logging (your original logs state too early)
    console.log('Input Value:', newTodo);

    // ADDED: log what was added (matches assignment requirement)
    console.log('Added Todo:', {
      title: newTodo,
      todoIndex: todos.length,
      complete: false
    });

    console.log('State:', {
      todos: updatedTodos
    });
  }

  render() {
    const {inputValue} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />

          <SubmitButton submitTodo={() => this.submitTodo()} />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;