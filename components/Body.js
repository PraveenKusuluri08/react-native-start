import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  Pressable,
} from 'react-native';

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        return res.json();
      })
      .then(js => {
        setTimeout(() => {
          setData(js);
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {data.length === 0 ? (
        <ActivityIndicator color="#ed930c" size="large" style={styles.loader} />
      ) : (
        <View style={styles.bodyView}>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            showVerticalScrollIndicator={true}>
            <Pressable>
              <View>
                {data.map(item => (
                  <View key={item.id}>
                    <View style={styles.todo}>
                      <Text style={styles.title}>
                        {item.title.toUpperCase()}
                        {`\n`}
                      </Text>
                      <View style={styles.desc}>
                        <Text>Completed {item.completed ? 'Yes' : 'No'}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </Pressable>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    overflow: 'hidden',
  },
  bodyView: {
    flex: 1,
    margin: 20,
    height: 700,
  },
  todo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Body;
