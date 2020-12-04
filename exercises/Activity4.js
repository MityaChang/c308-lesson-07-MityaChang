import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity4: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.child, {backgroundColor: 'powderblue', flex: 1}]}>
        Child One
      </Text>
      <Text style={[styles.child, {backgroundColor: 'skyblue', flex: 2}]}>
        Child Two
      </Text>
      <Text style={[styles.child, {backgroundColor: 'steelblue', flex: 3}]}>
        Child Three
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
    flexDirection: 'row',
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Activity4;
