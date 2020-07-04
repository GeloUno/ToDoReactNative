import React, {useState} from 'react';

import {View, TextInput, Button, Alert} from 'react-native';

const AddToDo = ({addToDoItem}) => {
  const [item, setItem] = useState('');
  const changeTextInput = newText => {
    setItem(newText);
  };
  const pressButton = () => {
    if (!item) {
      Alert.alert('Error', 'pleas enter to do');
    } else {
      addToDoItem(item);
      setItem('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="add to do ..."
        value={item}
        onChangeText={newText => changeTextInput(newText)}
      />
      <Button title="Add to do" onPress={e => pressButton()} />
    </View>
  );
};

export default AddToDo;
