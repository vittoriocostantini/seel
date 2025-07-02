import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CONTINENTS     = [
  { key: 'asia', label: 'Asia' },
  { key: 'europa', label: 'Europe' },
  { key: 'sudamerica', label: 'South America' },
  { key: 'africa', label: 'Africa' },
  { key: 'oceania', label: 'Oceania' },
  { key: 'northamerica', label: 'North America' },
];

type ContinentKey = 'asia' | 'europa' | 'sudamerica' | 'africa' | 'oceania' | 'northamerica';

interface ContinentBarProps {
  onSelect?: (key: ContinentKey) => void;
  selected?: ContinentKey;
}

const ContinentBar: React.FC<ContinentBarProps> = ({ onSelect, selected }) => {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKey>(selected || 'asia');

  const handleSelect = (key: ContinentKey) => {
    setSelectedContinent(key);
    if (onSelect) onSelect(key);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your next trip</Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },
  bar: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: '#222',
  },
  buttonText: {
    color: '#888',
    fontWeight: '500',
    fontSize: 15,
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default ContinentBar;
