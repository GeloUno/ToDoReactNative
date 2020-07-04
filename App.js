import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        Hello <Text style={{fontWeight: 'bold'}}>Mały</Text> wita Cię
      </Text>
      <Text
        style={{
          fontSize: 27,
          fontWeight: 'bold',
          color: '#02A2FE',
        }}>
        React Native
      </Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/lego/6.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 27,
    color: '#449344',
  },
  img: {
    marginTop: 25,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default App;
