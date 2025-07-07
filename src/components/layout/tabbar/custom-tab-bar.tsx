import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TABS = [
  { name: 'Home', icon: (focused: boolean) => (
      <Ionicons name="home-outline" size={24} color={focused ? '#222' : '#fff'} />
    ) },
  { name: 'Profile', icon: (focused: boolean) => (
      <Ionicons name="person-outline" size={24} color={focused ? '#222' : '#fff'} />
    ) },
    
];

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.tab}
              activeOpacity={0.8}
            >
              {focused ? (
                <View style={styles.activeCircle}>
                  {TABS[index].icon(focused)}
                </View>
              ) : (
                TABS[index].icon(focused)
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 20,
    right: 20,
    marginHorizontal: 20,
    bottom: 40,
    alignItems: 'center',
    zIndex: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#212529',
    borderRadius: 100,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    shadowColor: '#212529',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCircle: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default CustomTabBar; 