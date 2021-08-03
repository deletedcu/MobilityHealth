import 'react-native-gesture-handler';
import React, {useState, useCallback, useMemo} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {PreferencesContext} from './PreferencesContext';
import HomeScreen from '../screens/HomeScreen';
import AuthorizeScreen from '../screens/AuthorizeScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import ActivitiesDetailScreen from '../screens/ActivitiesDetailScreen';
import SleepScreen from '../screens/SleepScreen';

const Stack = createStackNavigator();
const CustomTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const CombinedDefaultTheme = merge(PaperDefaultTheme, CustomTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function Routes() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(() => ({
    toggleTheme,
    isThemeDark,
  }), [toggleTheme, isThemeDark]);

  const navigationOptions = {
    headerStyle: {
      backgroundColor: '#002366'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName='Authorize'>
            <Stack.Screen 
              name='Authorize' 
              component={AuthorizeScreen}
              options={navigationOptions} />
            <Stack.Screen
              name='Home' 
              component={HomeScreen}
              options={navigationOptions} />
            <Stack.Screen 
              name='Activities' 
              component={ActivitiesScreen}
              options={navigationOptions} />
            <Stack.Screen 
              name='ActivitiesDetail' 
              component={ActivitiesDetailScreen} 
              options={({route}) => ({...navigationOptions, title: route.params.title})}/>
            <Stack.Screen 
              name='Sleep' 
              component={SleepScreen}
              options={{...navigationOptions, title: 'Sleep Analysis'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}