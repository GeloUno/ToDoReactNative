import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './app/components/header';
import {v4 as uuidv4} from 'uuid';
import ListTodos from './app/components/ListTodos';
import AddToDo from './app/components/AddToDo';

const App = () => {
  const [Todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'go home',
      description: 'wolk to home',
    },
    {
      id: uuidv4(),
      title: 'shopping',
      description: "go to shop's",
    },
    {
      id: uuidv4(),
      title: 'dinner',
      description: 'eat something',
    },
  ]);

  const deleteTodo = id => {
    console.log(id);

    setTodos(
      Todos.filter(todo => {
        return todo.id != id;
      }),
    );
  };

  const addToDoItem = item => {
    console.log(item);

    return setTodos([
      {
        id: uuidv4(),
        title: item,
        description: '',
      },
      ...Todos,
    ]);
  };

  return (
    <View style={styles.container}>
      <Header title={'To Do List'} />
      <AddToDo addToDoItem={addToDoItem} />
      <FlatList
        data={Todos}
        renderItem={({item}) => (
          <ListTodos item={item} deleteTodo={deleteTodo} />
        )}
        keyExtractor={item => item.id}
      />
      <Text style={styles.textContainer}>
        Hello <Text style={{fontWeight: 'bold'}}>Gello</Text> wita Cię
        serdecznie
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {},
});

export default App;
