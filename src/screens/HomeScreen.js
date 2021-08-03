import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Switch, Title, Text, Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import i18n from '../locales';
import {useDemo} from '../hooks';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const {demoAvailable, setDemoF} = useDemo();

  const onToggleSwitch = () => {
    setDemoF(!demoAvailable);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <View style={style.switchContainer}>
          <Switch value={demoAvailable} onValueChange={onToggleSwitch}/>
          <Text>{i18n.t('use_demo')}</Text>
        </View>
        <TouchableOpacity style={{width: '100%'}} onPress={() => navigation.push('Activities')}>
          <LinearGradient 
            style={style.itemContainer}
            colors={[colors.gradient1, colors.gradient2]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Avatar.Icon size={40} icon='walk'/>
            <View style={style.itemTextContainer}>
              <Title style={style.itemText}>{i18n.t('activities')}</Title>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={() => navigation.push('Sleep')}>
          <LinearGradient 
            style={style.itemContainer}
            colors={[colors.gradient1, colors.gradient2]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Avatar.Icon size={40} icon='power-sleep'/>
            <View style={style.itemTextContainer}>
              <Title style={style.itemText}>{i18n.t('sleep_analysis')}</Title>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  itemContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 1,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'grey'
  },
  itemTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 8,
  },
  itemText: {
    color: '#fff',
  },
});

export default HomeScreen;