import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title: title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#95b600',
  },
  textHeader: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
