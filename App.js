import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Body />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
