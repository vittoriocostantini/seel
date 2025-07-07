import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Profile;