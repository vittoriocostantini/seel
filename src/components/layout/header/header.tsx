import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import SearchBar from '../search-bar/search-bar';

const user = {
  name: 'Vanessa',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

function Header() {
  const [search, setSearch] = useState('');
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.hello}>Hello, {user.name}</Text>
          <Text style={styles.welcome}>Welcome to Seel</Text>
        </View>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
      <SearchBar search={search} setSearch={setSearch} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  hello: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  welcome: {
    fontSize: 14,
    color: '#888',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ddd',
  },
});

export default Header; 