// App.js
import React, {Component} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';

import {fetchTodos, addTodo, removeTodo} from '../redux/action';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
    };
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleAddTodo = () => {
    if (this.state.text) {
      this.props.addTodo(this.state.text);
      this.setState({text: ''});
    }
  };

  render() {
    const {todos} = this.props;
    console.log(todos, 'todos from home');

    return (
      <View>
        <TextInput
          placeholder="Add a to-do"
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <Button title="Add" onPress={this.handleAddTodo} />
        <FlatList
          data={this.props.todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <Text>{item.todo}</Text>
              <Button
                title="Remove"
                onPress={() => this.props.removeTodo(item.id)}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
