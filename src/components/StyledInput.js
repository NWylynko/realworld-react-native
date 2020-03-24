import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export function StyledInput(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.30)',
  },
});
