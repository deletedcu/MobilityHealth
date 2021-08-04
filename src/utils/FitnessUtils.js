import * as DateUtils from './DateUtils';

export const initialActivities = () => {
  return {
    day0: {day: DateUtils.getDayName(0), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 0), steps: 0, calories: 0, distances: 0},
    day1: {day: DateUtils.getDayName(1), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 1), steps: 0, calories: 0, distances: 0},
    day2: {day: DateUtils.getDayName(2), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 2), steps: 0, calories: 0, distances: 0},
    day3: {day: DateUtils.getDayName(3), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 3), steps: 0, calories: 0, distances: 0},
    day4: {day: DateUtils.getDayName(4), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 4), steps: 0, calories: 0, distances: 0},
    day5: {day: DateUtils.getDayName(5), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 5), steps: 0, calories: 0, distances: 0},
    day6: {day: DateUtils.getDayName(6), dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', 6), steps: 0, calories: 0, distances: 0},
  };
};

export const prepareActivities = ({steps, calories, distances}) => {
  return {
    day0: getActivitiesByIndex(steps, calories, distances, 0),
    day1: getActivitiesByIndex(steps, calories, distances, 1),
    day2: getActivitiesByIndex(steps, calories, distances, 2),
    day3: getActivitiesByIndex(steps, calories, distances, 3),
    day4: getActivitiesByIndex(steps, calories, distances, 4),
    day5: getActivitiesByIndex(steps, calories, distances, 5),
    day6: getActivitiesByIndex(steps, calories, distances, 6),
  }
};

function getActivitiesByIndex(steps, calories, distances, index) {
  const startDate = DateUtils.getStartOfDayBySubtract(index).unix();
  const endDate = DateUtils.getEndOfDayBySubtract(index).unix();
  const filterSteps = steps.filter(item => {
    return DateUtils.getTimeStamp(item.startDate) > startDate && 
      DateUtils.getTimeStamp(item.endDate) < endDate;
  });
  let stepsTotal = 0;
  filterSteps.forEach(item => {
    stepsTotal += item.quantity;
  })

  const filterCalories = calories.filter(item => {
    return DateUtils.getTimeStamp(item.startDate) > startDate && 
      DateUtils.getTimeStamp(item.endDate) < endDate;
  });
  let caloriesTotal = 0;
  filterCalories.forEach(item => {
    caloriesTotal += item.quantity;
  })

  const filterDistances = distances.filter(item => {
    return DateUtils.getTimeStamp(item.startDate) > startDate && 
      DateUtils.getTimeStamp(item.endDate) < endDate;
  });
  let distancesTotal = 0;
  filterDistances.forEach(item => {
    distancesTotal += item.quantity;
  })

  return {
    day: DateUtils.getDayName(index),
    dayString: DateUtils.getFormatStringBySubtract('dddd, MMMM D, YYYY', index),
    steps: stepsTotal,
    distances: distancesTotal,
    calories: caloriesTotal,
  };
};

export const initialSleepAnalysis = () => {
  return {
    sleepTime: 0,
    bedTime: 0,
    deepTime: 0,
    lightTime: 0,
    remTime: 0,
    wakeTime: 0,
    unknownTime: 0,
    deepPercent: '0%',
    lightPercent: '0%',
    remPercent: '0%',
  };
}

export const prepareSleepAnalysis = ({sleeps, index}) => {
  const startDate = DateUtils.getStartOfDayBySubtract(index).unix();
  const endDate = DateUtils.getEndOfDayBySubtract(index).unix();
  const filterItems = sleeps.filter(item => {
    return DateUtils.getTimeStamp(item.startDate) > startDate &&
      DateUtils.getTimeStamp(item.endDate) < endDate;
  }).map(item => {
    return {
      ...item,
      duration: DateUtils.getTimeStamp(item.endDate) - DateUtils.getTimeStamp(item.startDate)
    }
  });

  let sleepSeconds = 0;
  let unknownSeconds = 0;
  let deepSeconds = 0;
  let lightSeconds = 0;
  let remSeconds = 0;
  let wakeSeconds = 0;

  filterItems.forEach(item => {
    sleepSeconds += item.duration;
    if (item.value === 'sleep.deep') {
      deepSeconds += item.duration;
    } else if (item.value === 'sleep.light') {
      lightSeconds += item.duration;
    } else if (item.value === 'sleep.rem') {
      remSeconds += item.duration;
    } else if (item.value === 'sleep.awake') {
      wakeSeconds += item.duration;
    } else if (item.value === 'unknown') {
      unknownSeconds += item.duration;
    }
  })

  const bedSeconds = sleepSeconds - unknownSeconds;
  
  return {
    sleepTime: sleepSeconds,
    bedTime: bedSeconds,
    deepTime: deepSeconds,
    lightTime: lightSeconds,
    remTime: remSeconds,
    wakeTime: wakeSeconds,
    unknownTime: unknownSeconds,
    deepPercent: sleepSeconds > 0 ? `${Math.round(deepSeconds / sleepSeconds * 100)}%` : '0%',
    lightPercent: sleepSeconds > 0 ? `${Math.round(lightSeconds / sleepSeconds * 100)}%` : '0%',
    remPercent: sleepSeconds > 0 ? `${Math.round(remSeconds / sleepSeconds * 100)}%` : '0%',
  };
};
