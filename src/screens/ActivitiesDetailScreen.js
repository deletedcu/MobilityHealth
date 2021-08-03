import React from 'react';
import {View, StyleSheet} from 'react-native';
import ActivitiesChart from '../components/charts/ActivitiesChart';

const ActivitiesDetailScreen = ({route}) => {
  console.log(route.params);
  return (
    <View style={style.container}>
      <ActivitiesChart value={route.params.item} details={true}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ActivitiesDetailScreen;