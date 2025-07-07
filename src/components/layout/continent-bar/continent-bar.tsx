import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ContinentKey } from '../../../types/continent-key';

const CONTINENTS     = [
  { key: 'asia', label: 'Asia' },
  { key: 'europe', label: 'Europe' },
  { key: 'southamerica', label: 'South America' },
  { key: 'africa', label: 'Africa' },
  { key: 'oceania', label: 'Oceania' },
  { key: 'northamerica', label: 'North America' },
];


interface ContinentBarProps {
  onSelect?: (key: ContinentKey) => void;
  selected?: ContinentKey;
}

const ContinentBar: React.FC<ContinentBarProps> = ({ onSelect, selected }) => {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKey>(selected || 'asia');
  const insets = useSafeAreaInsets();

  const handleSelect = (key: ContinentKey) => {
    setSelectedContinent(key);
    if (onSelect) onSelect(key);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10
      }]}>Select your next trip</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bar} contentContainerStyle={{alignItems: 'center'}}>
        {CONTINENTS.map((cont) => (
          <TouchableOpacity
            key={cont.key}
            style={[
              styles.button,
              selectedContinent === cont.key && styles.selectedButton,
            ]}
            onPress={() => handleSelect(cont.key as ContinentKey)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedContinent === cont.key && styles.selectedButtonText,
              ]}
            >
              {cont.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#212529',
  },
  bar: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: '#212529',
  },
  buttonText: {
    color: '#212529',
    fontWeight: '400',
    fontSize: 14,
  },
  selectedButtonText: {
    color: '#ffffff',
  },
});

export default ContinentBar;
