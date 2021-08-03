import moment from 'moment';

export const tempSleepAnalysis = [
  // Current date
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().hour(1).minute(10).second(20).format(),
    endDate: moment().hour(1).minute(20).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().hour(1).minute(20).second(30).format(),
    endDate: moment().hour(1).minute(30).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().hour(1).minute(31).second(20).format(),
    endDate: moment().hour(3).minute(20).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().hour(3).minute(30).second(20).format(),
    endDate: moment().hour(5).minute(20).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().hour(5).minute(30).second(20).format(),
    endDate: moment().hour(6).minute(20).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().hour(6).minute(30).second(20).format(),
    endDate: moment().hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().hour(7).minute(21).second(20).format(),
    endDate: moment().hour(7).minute(30).second(20).format(),
  },
  // Current date - 1
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(1).minute(5).second(20).format(),
    endDate: moment().subtract(1, 'days').hour(1).minute(20).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(1).minute(20).second(30).format(),
    endDate: moment().subtract(1, 'days').hour(1).minute(37).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(1).minute(41).second(20).format(),
    endDate: moment().subtract(1, 'days').hour(3).minute(20).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(3).minute(30).second(20).format(),
    endDate: moment().subtract(1, 'days').hour(5).minute(20).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(5).minute(30).second(20).format(),
    endDate: moment().subtract(1, 'days').hour(6).minute(20).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(6).minute(30).second(20).format(),
    endDate: moment().subtract(1, 'days').hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(1, 'days').hour(7).minute(21).second(20).format(),
    endDate: moment().subtract(1, 'days').hour(7).minute(30).second(20).format(),
  },
  // Current date - 2
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(1).minute(10).second(20).format(),
    endDate: moment().subtract(2, 'days').hour(1).minute(20).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(1).minute(25).second(30).format(),
    endDate: moment().subtract(2, 'days').hour(1).minute(30).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(1).minute(31).second(20).format(),
    endDate: moment().subtract(2, 'days').hour(3).minute(20).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(3).minute(30).second(20).format(),
    endDate: moment().subtract(2, 'days').hour(5).minute(10).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(5).minute(30).second(20).format(),
    endDate: moment().subtract(2, 'days').hour(6).minute(20).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(6).minute(30).second(20).format(),
    endDate: moment().subtract(2, 'days').hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(2, 'days').hour(7).minute(21).second(20).format(),
    endDate: moment().subtract(2, 'days').hour(7).minute(30).second(20).format(),
  },
  // Current date - 3
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(1).minute(10).second(20).format(),
    endDate: moment().subtract(3, 'days').hour(1).minute(18).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(1).minute(20).second(30).format(),
    endDate: moment().subtract(3, 'days').hour(1).minute(30).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(1).minute(31).second(20).format(),
    endDate: moment().subtract(3, 'days').hour(3).minute(20).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(3).minute(30).second(20).format(),
    endDate: moment().subtract(3, 'days').hour(5).minute(20).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(5).minute(30).second(20).format(),
    endDate: moment().subtract(3, 'days').hour(6).minute(5).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(6).minute(32).second(20).format(),
    endDate: moment().subtract(3, 'days').hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(3, 'days').hour(7).minute(21).second(20).format(),
    endDate: moment().subtract(3, 'days').hour(7).minute(30).second(20).format(),
  },
  // Current date - 4
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(1).minute(3).second(20).format(),
    endDate: moment().subtract(4, 'days').hour(1).minute(20).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(1).minute(20).second(30).format(),
    endDate: moment().subtract(4, 'days').hour(1).minute(29).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(1).minute(31).second(20).format(),
    endDate: moment().subtract(4, 'days').hour(3).minute(20).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(3).minute(30).second(20).format(),
    endDate: moment().subtract(4, 'days').hour(5).minute(20).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(5).minute(44).second(20).format(),
    endDate: moment().subtract(4, 'days').hour(6).minute(20).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(6).minute(30).second(20).format(),
    endDate: moment().subtract(4, 'days').hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(4, 'days').hour(7).minute(21).second(20).format(),
    endDate: moment().subtract(4, 'days').hour(7).minute(30).second(20).format(),
  },
  // Current date - 5
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(1).minute(4).second(20).format(),
    endDate: moment().subtract(5, 'days').hour(1).minute(20).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(1).minute(22).second(30).format(),
    endDate: moment().subtract(5, 'days').hour(1).minute(30).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(1).minute(31).second(20).format(),
    endDate: moment().subtract(5, 'days').hour(3).minute(5).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(3).minute(30).second(20).format(),
    endDate: moment().subtract(5, 'days').hour(5).minute(20).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(5).minute(30).second(20).format(),
    endDate: moment().subtract(5, 'days').hour(6).minute(20).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(6).minute(30).second(20).format(),
    endDate: moment().subtract(5, 'days').hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(5, 'days').hour(7).minute(21).second(20).format(),
    endDate: moment().subtract(5, 'days').hour(7).minute(30).second(20).format(),
  },
  // Current date - 6
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(1).minute(10).second(20).format(),
    endDate: moment().subtract(6, 'days').hour(1).minute(20).second(20).format(),
  },
  {
    value: 'unknown',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(1).minute(20).second(30).format(),
    endDate: moment().subtract(6, 'days').hour(1).minute(26).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(1).minute(31).second(20).format(),
    endDate: moment().subtract(6, 'days').hour(3).minute(15).second(20).format(),
  },
  {
    value: 'sleep.deep',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(3).minute(30).second(20).format(),
    endDate: moment().subtract(6, 'days').hour(5).minute(20).second(20).format(),
  },
  {
    value: 'sleep.rem',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(5).minute(30).second(20).format(),
    endDate: moment().subtract(6, 'days').hour(6).minute(20).second(20).format(),
  },
  {
    value: 'sleep.light',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(6).minute(22).second(20).format(),
    endDate: moment().subtract(6, 'days').hour(7).minute(20).second(20).format(),
  },
  {
    value: 'sleep.awake',
    sourceId: '',
    startDate: moment().subtract(6, 'days').hour(7).minute(21).second(20).format(),
    endDate: moment().subtract(6, 'days').hour(7).minute(30).second(20).format(),
  },
];

export const tempSteps = [
  {
    quantity: 4500,
    startDate: moment().hour(10).format(),
    endDate: moment().hour(23).format(),
  },
  {
    quantity: 7554,
    startDate: moment().subtract(1, 'days').hour(10).format(),
    endDate: moment().subtract(1, 'days').hour(23).format(),
  },
  {
    quantity: 8769,
    startDate: moment().subtract(2, 'days').hour(10).format(),
    endDate: moment().subtract(2, 'days').hour(23).format(),
  },
  {
    quantity: 5672,
    startDate: moment().subtract(3, 'days').hour(10).format(),
    endDate: moment().subtract(3, 'days').hour(23).format(),
  },
  {
    quantity: 9845,
    startDate: moment().subtract(4, 'days').hour(10).format(),
    endDate: moment().subtract(4, 'days').hour(23).format(),
  },
  {
    quantity: 6690,
    startDate: moment().subtract(5, 'days').hour(10).format(),
    endDate: moment().subtract(5, 'days').hour(23).format(),
  },
  {
    quantity: 3500,
    startDate: moment().subtract(6, 'days').hour(10).format(),
    endDate: moment().subtract(6, 'days').hour(23).format(),
  },
];

export const tempCalories = [
  {
    quantity: 540,
    startDate: moment().hour(10).format(),
    endDate: moment().hour(23).format(),
  },
  {
    quantity: 450,
    startDate: moment().subtract(1, 'days').hour(10).format(),
    endDate: moment().subtract(1, 'days').hour(23).format(),
  },
  {
    quantity: 225,
    startDate: moment().subtract(2, 'days').hour(10).format(),
    endDate: moment().subtract(2, 'days').hour(23).format(),
  },
  {
    quantity: 354,
    startDate: moment().subtract(3, 'days').hour(10).format(),
    endDate: moment().subtract(3, 'days').hour(23).format(),
  },
  {
    quantity: 245,
    startDate: moment().subtract(4, 'days').hour(10).format(),
    endDate: moment().subtract(4, 'days').hour(23).format(),
  },
  {
    quantity: 490,
    startDate: moment().subtract(5, 'days').hour(10).format(),
    endDate: moment().subtract(5, 'days').hour(23).format(),
  },
  {
    quantity: 350,
    startDate: moment().subtract(6, 'days').hour(10).format(),
    endDate: moment().subtract(6, 'days').hour(23).format(),
  },
];

export const tempDistances = [
  {
    quantity: 1500,
    startDate: moment().hour(10).format(),
    endDate: moment().hour(23).format(),
  },
  {
    quantity: 1554,
    startDate: moment().subtract(1, 'days').hour(10).format(),
    endDate: moment().subtract(1, 'days').hour(23).format(),
  },
  {
    quantity: 1769,
    startDate: moment().subtract(2, 'days').hour(10).format(),
    endDate: moment().subtract(2, 'days').hour(23).format(),
  },
  {
    quantity: 1672,
    startDate: moment().subtract(3, 'days').hour(10).format(),
    endDate: moment().subtract(3, 'days').hour(23).format(),
  },
  {
    quantity: 1845,
    startDate: moment().subtract(4, 'days').hour(10).format(),
    endDate: moment().subtract(4, 'days').hour(23).format(),
  },
  {
    quantity: 1690,
    startDate: moment().subtract(5, 'days').hour(10).format(),
    endDate: moment().subtract(5, 'days').hour(23).format(),
  },
  {
    quantity: 1500,
    startDate: moment().subtract(6, 'days').hour(10).format(),
    endDate: moment().subtract(6, 'days').hour(23).format(),
  },
];
