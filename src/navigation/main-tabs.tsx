import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/home/home';
import Profile from '../screens/profile/profile';
import BookNow from '../screens/book/book-now';


const TABS = [
  { key: 'Home', title: 'Home', icon: (focused: boolean) => (
      <Ionicons name="home-outline" size={24} color={focused ? '#222' : '#fff'} />
    ) },
  
  { key: 'Profile', title: 'Profile', icon: (focused: boolean) => (
      <Ionicons name="person-outline" size={24} color={focused ? '#222' : '#fff'} />
    ) },
];

export default function MainTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(TABS.map(tab => ({ key: tab.key, title: tab.title })));



  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case 'Home':
        return <Home />;
      case 'Profile':
        return <BookNow />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      swipeEnabled={false}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <Animated.View style={styles.wrapper}> 
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const focused = index === i;
              return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={focused ? { selected: true } : {}}
                  onPress={() => setIndex(i)}
                  style={styles.tab}
                  activeOpacity={0.8}
                >
                  {focused ? (
                    <View style={styles.activeCircle}>
                      {TABS[i].icon(focused)}
                    </View>
                  ) : (
                    TABS[i].icon(focused)
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.View>
      )}
    />
  );
}

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
    backgroundColor: '#222',
    borderRadius: 100,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    shadowColor: '#000',
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
    backgroundColor: '#fff',
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