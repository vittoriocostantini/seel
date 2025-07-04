import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './src/navigation/main-tabs';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
}
