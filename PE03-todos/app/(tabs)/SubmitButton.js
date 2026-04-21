import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function SubmitButton({ submitTodo }) {
  return (
    <View style={styles.container}>
      <Button
        title="Submit"
        onPress={submitTodo} // This now calls the function in App.js
        color="#666666"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    alignItems: 'flex-end', // pushes button to right
    paddingRight: 20,
  },
});