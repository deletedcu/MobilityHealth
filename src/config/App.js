import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from '../redux/store';
import Routes from './Routes';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
