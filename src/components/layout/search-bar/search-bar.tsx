import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SearchBarProps {
  search: string;
  setSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.searchBar, {
      paddingLeft: insets.left + 20,
      paddingRight: insets.right + 20
    }]}>
      <MaterialIcons name="search" size={22} color="#888" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity style={styles.filterBtn}>
        <Feather name="sliders" size={22} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    color: '#212529',
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  filterBtn: {
    backgroundColor: '#212529',
    borderRadius: 100,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});

export default SearchBar; 