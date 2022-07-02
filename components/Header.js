import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>API-DATA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    heigth: 60,
    padding: 15,
    backgroundColor: '#41a3e0',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
