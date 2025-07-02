import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

interface SearchBarProps {
  search: string;
  setSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => (
  <View style={styles.searchBar}>
    <MaterialIcons name="search" size={22} color="#888" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search"
      placeholderTextColor="#888"
      value={search}
      onChangeText={setSearch}
    />
    <TouchableOpacity style={styles.filterBtn}>
      <Feather name="sliders" size={22} color="#fff" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  filterBtn: {
    backgroundColor: '#222',
    borderRadius: 100,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});

export default SearchBar; 