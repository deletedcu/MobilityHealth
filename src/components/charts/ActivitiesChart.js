import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {ProgressChart} from 'react-native-chart-kit';
import {useTheme} from '@react-navigation/native';
import i18n from '../../locales';

const screenWidth = Dimensions.get('window').width - 16;
const screenHeight = 220;

const ActivitiesChart = ({value, details}) => {
  const {colors} = useTheme();

  const stepGoal = 10000;
  const distanceGoal = 2000;
  const caloryGoal = 630;

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

  const data = {
    labels: [i18n.t('steps'), i18n.t('calories'), i18n.t('distances')],
    data: [value.steps / stepGoal, value.calories / caloryGoal, value.distances / distanceGoal],
  }
  
  return (
    <View style={style.container}>
      <Title style={style.title}>{i18n.t('activity')}</Title>
      <View style={style.chartContainer}>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={screenHeight}
          strokeWidth={16}
          radius={32}
          style={style.chart}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
      {details &&
        <View style={style.textContainer}>
          <Text style={style.text}>{i18n.t('steps')}</Text>
          <Text style={style.textValue}>{value.steps}/{stepGoal} {i18n.t('steps')}</Text>
          <Text style={style.text}>{i18n.t('calories')}</Text>
          <Text style={style.textValue}>{value.calories}/{caloryGoal} {i18n.t('calories')}</Text>
          <Text style={style.text}>{i18n.t('steps')}</Text>
          <Text style={style.textValue}>{value.distances}/{distanceGoal} {i18n.t('distances')}</Text>
        </View>
      }
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  chartContainer: {
    width: '100%',
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    borderRadius: 8,
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 16,
    marginHorizontal: 8,
  },
  title: {
    marginTop: 8,
    marginStart: 8,
  },
  textValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
  }
});

export default ActivitiesChart;