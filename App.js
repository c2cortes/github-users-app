import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchComponent from './src/containers/github/SearchComponent';
import SelectedItems from './src/containers/github/SelectedItems';
import WebViewRepository from './src/containers/github/WebViewRepository';

const store = configureStore();
const persistor = persistStore(store);

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Search Repositories" component={SearchComponent} />
            <Stack.Screen name="SelectedRepositories" component={SelectedItems} />
            <Stack.Screen name="WebViewRepositoryScreen" component={WebViewRepository} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

