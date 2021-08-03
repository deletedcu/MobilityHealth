import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Portal, ActivityIndicator, Surface, Text, withTheme, Title, Avatar, Card, Divider} from 'react-native-paper';
import { useLoading, useSleepAnalysis } from '../hooks';
import {initialSleepAnalysis, prepareSleepAnalysis} from '../utils/FitnessUtils';
import {getFormatStringBySubtract, getTimeStringBySeconds} from '../utils/DateUtils';
import SleepChart from '../components/charts/SleepChart';
import {tempSleepAnalysis} from '../demo/data';
import i18n from '../locales';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 10;

const SleepScreen = (props) => {
  const {colors} = props.theme;
  const [key, setKey] = useState(0);
  const [data, setData] = useState(initialSleepAnalysis());
  const {loading, setLoadingF} = useLoading();
  const {demoAvailable, sleeps, getSleepAnalysisF} = useSleepAnalysis();

  useEffect(() => {
    setLoadingF(true);
    getSleepAnalysisF();
  }, []);

  useEffect(() => {
    handleChangeDay(key);
  }, [sleeps]);

  function handleChangeDay(index) {
    setKey(index);
    if (demoAvailable) {
      const value = prepareSleepAnalysis({sleeps: tempSleepAnalysis, index: index});
      setData(value);
    } else {
      const value = prepareSleepAnalysis({sleeps: sleeps, index: index});
      setData(value);
    }
  }

  const DayComponent = ({index}) => {
    return (
      <TouchableOpacity onPress={() => handleChangeDay(index)}>
        <Surface style={[style.surface, index === key && {backgroundColor: colors.primary}]}>
          <Text style={index === key && {color: colors.background}}>{getFormatStringBySubtract('dd', index)}</Text>
        </Surface>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.container}>
        <View style={style.container}>
          <View style={style.daysContainer}>
            <DayComponent index={6} />
            <DayComponent index={5} />
            <DayComponent index={4} />
            <DayComponent index={3} />
            <DayComponent index={2} />
            <DayComponent index={1} />
            <DayComponent index={0} />
          </View>
          <View style={style.mainContainer}>
            <Title>{getFormatStringBySubtract('dddd, MMMM D, YYYY', key)}</Title>
            <SleepChart value={data}/>
            <View style={style.itemContainer}>
              <Card.Title
                title={i18n.t('sleep_duration')}
                left={(props) => <Avatar.Icon {...props} icon='clock-time-five'/>}
                right={(props) => (<Text {...props}>{getTimeStringBySeconds(data.sleepTime)}</Text>)}
              />
              <Divider />
              <Card.Title
                title={data.lightPercent}
                subtitle={i18n.t('light_sleep')}
                left={(props) => <Avatar.Icon {...props} icon='leaf'/>}
                right={(props) => (<Text {...props}>{getTimeStringBySeconds(data.lightTime)}</Text>)}
              />
              <Divider />
              <Card.Title
                title={data.deepPercent}
                subtitle={i18n.t('deep_sleep')}
                left={(props) => <Avatar.Icon {...props} icon='power-sleep'/>}
                right={(props) => (<Text {...props}>{getTimeStringBySeconds(data.deepTime)}</Text>)}
              />
              <Divider />
              <Card.Title
                title={data.remPercent}
                subtitle={i18n.t('rem_sleep')}
                left={(props) => <Avatar.Icon {...props} icon='head-lightbulb'/>}
                right={(props) => (<Text {...props}>{getTimeStringBySeconds(data.remTime)}</Text>)}
              />
              <Divider />
              <Card.Title
                title={i18n.t('wake_time')}
                left={(props) => <Avatar.Icon {...props} icon='weather-sunset'/>}
                right={(props) => (<Text {...props}>{getTimeStringBySeconds(data.wakeTime)}</Text>)}
              />
              <Divider />
              <Card.Title
                title={i18n.t('time_in_bed')}
                left={(props) => <Avatar.Icon {...props} icon='bed'/>}
                right={(props) => (<Text {...props}>{getTimeStringBySeconds(data.bedTime)}</Text>)}
              />
            </View>
          </View>
          {loading && <Portal><ActivityIndicator animating={true} size='large' style={style.loadingContainer}/></Portal>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  daysContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  surface: {
    padding: 8,
    height: itemWidth,
    width: itemWidth,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: itemWidth / 2,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  itemContainer: {
    width: '100%',
  }
});

export default withTheme(SleepScreen);