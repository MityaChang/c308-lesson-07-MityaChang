import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity3: () => React$Node = () => {
  return (
    <View style={[styles.parent, {flexDirection: 'column', flex: 1}]}>
      <Text style={[styles.child, {backgroundColor: 'powderblue', maxWidth:90}]}>
        Child One
      </Text>
      <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
        Child Two
      </Text>
      <Text style={[styles.child, {backgroundColor: 'steelblue', maxHeight:120}]}>
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
  },
  child: {
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Activity3;
