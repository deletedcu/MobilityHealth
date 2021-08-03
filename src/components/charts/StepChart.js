import React, { useState } from 'react';
import {Dimensions, View, StyleSheet, ScrollView} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {Text as TextSVG, Svg, Rect} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width - 16;
const screenHeight = 220;

const StepChart = ({steps}) => {
  const chartConfig = {
    backgroundGradientFrom: '#000C59',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#213e8e',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 0,
    style: {borderRadius: 8},
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets:[
      {
        data:[8000, 2000, 3000, 5000, 10000, 7000],
      }
    ]
  };

  const [tooltipPos, setTooltipPos] = useState({x: 0, y: 0, visible: false, value: 0});

  let chartWidth = data.labels.length * 40 + 50;
  if (chartWidth < screenWidth) {
    chartWidth = screenWidth;
  }

  const tooltip = () => {
    if (tooltipPos.visible) {
      return (
        <View>
          <Svg>
            <Rect
              x={tooltipPos.x - 15}
              y={tooltipPos.y + 10}
              width='50'
              height='30'
              fill='black'
            />
            <TextSVG
              x={tooltipPos.x + 10}
              y={tooltipPos.y + 30}
              fill='white'
              fontSize='16'
              fontWeight='bold'
              textAnchor='middle'
            >
              {tooltipPos.value}
            </TextSVG>
          </Svg>
        </View>
      );
    } else {
      return null;
    }
  };

  function handleDataPointClick(value) {
    const isSamePoint = (tooltipPos.x === value.x && tooltipPos.y === value.y);
    isSamePoint ? setTooltipPos((previousState) => {
      return {
        ...previousState,
        value: value.value,
        visible: !previousState.visible,
      }
    }) : setTooltipPos({
      x: value.x,
      y: value.y,
      value: value.value,
      visible: true,
    });
  }

  return (
    <View style={style.container}>
      <Title style={style.title}>Today Steps</Title>
      <View style={style.chartContainer}>
        <ScrollView horizontal style={{marginHorizontal: 8}}>
          <LineChart
            data={data}
            width={chartWidth}
            height={screenHeight}
            chartConfig={chartConfig}
            style={style.chart}
            bezier
            decorator={tooltip}
            onDataPointClick={(data) => handleDataPointClick(data)}
          />
        </ScrollView>
      </View>
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
    position: 'absolute',
    width: '100%',
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTextContainer: {
    position: 'absolute',
    width: '100%',
    height: screenHeight,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingEnd: 24,
    paddingBottom: 8,
  },
  title: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  percent: {
    fontSize: 60,
    color: '#fff',
  },
  text: {
    color: '#fff',
  }
});

export default StepChart;