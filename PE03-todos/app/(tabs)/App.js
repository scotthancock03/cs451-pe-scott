import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import SubmitButton from './SubmitButton';
import TodoList from './TodoList' 
import TabBar from './TabBar'
let todoIndex = 0

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    };

    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  deleteTodo (todoIndex) {
    let {todos} = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplete (todoIndex) {   
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
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


    const newTodo = inputValue;

    this.setState({
      todos: updatedTodos,
      inputValue: ''
    });


    console.log('Input Value:', newTodo);

    console.log('Added Todo:', {
      title: newTodo,
      todoIndex: todos.length,
      complete: false
    });

    console.log('State:', {
      todos: updatedTodos
    });
  }

  setType(type) {
  this.setState({ type });
}

  render() {
    const { inputValue, todos, type } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList toggleComplete={this.toggleComplete}
           deleteTodo={this.deleteTodo}
           todos={todos}
           type={type} />
          <SubmitButton submitTodo={() => this.submitTodo()} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
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