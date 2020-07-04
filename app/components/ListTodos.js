import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListTodos = ({item, deleteTodo}) => {
  {
    {
      // console.log(item.id);
    }
  }
  return (
    <TouchableOpacity style={styles.listToDo}>
      <View style={styles.viewToDo}>
        <Text key={item.id} style={styles.textToDo}>
          {item.title}
        </Text>
        <Text
          onPress={() => {
            deleteTodo(item.id);
          }}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listToDo: {},
  viewToDo: {
    marginBottom: 1,
    padding: 15,
    backgroundColor: '#ffefdb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textToDo: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default ListTodos;
