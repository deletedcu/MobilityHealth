import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../locales';

const screenWidth = Dimensions.get('window').width - 16;
const screenHeight = 220;

const SleepChart = ({value}) => {
  const {colors} = useTheme();
  const chartConfig = {
    backgroundGradientFrom: colors.gradient1,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: colors.gradient2,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const data = [
    {
      name: i18n.t('light_sleep'),
      time: value.lightTime,
      color: '#f7ba00',
      legendFontColor: '#aaffffff',
      legentFontSize: 15,
    },
    {
      name: i18n.t('deep_sleep'),
      time: value.deepTime,
      color: '#4081ec',
      legendFontColor: '#aaffffff',
      legentFontSize: 15,
    },
    {
      name: i18n.t('rem_sleep'),
      time: value.remTime,
      color: '#f71001',
      legendFontColor: '#aaffffff',
      legentFontSize: 15,
    },
    {
      name: i18n.t('wake_time'),
      time: value.wakeTime,
      color: '#0f9855',
      legendFontColor: '#aaffffff',
      legentFontSize: 15,
    },
    {
      name: i18n.t('unknown'),
      time: value.unknownTime,
      color: '#924c93',
      legendFontColor: '#aaffffff',
      legentFontSize: 15,
    },
  ];

  return (
    <View style={style.container}>
      <LinearGradient 
          style={style.chartContainer}
          colors={[colors.gradient1, colors.gradient2]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
      <PieChart
        data={data}
        width={screenWidth}
        height={screenHeight}
        chartConfig={chartConfig}
        accessor={'time'}
        backgroundColor={'transparent'}
        paddingLeft={'24'}
      />
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    borderRadius: 8,
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
  },
});

export default SleepChart;