import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Title } from 'react-native-paper';
import ActivitiesChart from '../components/charts/ActivitiesChart';

const ActivitiesDetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={style.container}>
      <Title style={style.title}>{item.dayString}</Title>
      <ActivitiesChart value={item} details={true}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    marginTop: 16,
  }
});

export default ActivitiesDetailScreen;