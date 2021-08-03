import moment from 'moment';

export function getStartOfDayBySubtractString(days) {
  return moment().subtract(days, 'day').startOf('date').format();
}

export function getStartOfDayBySubtract(days) {
  return moment().subtract(days, 'day').startOf('date');
}

export function getEndofDateString() {
  return moment().endOf('date').format();
}

export function getEndOfDayBySubtractString(days) {
  return moment().subtract(days, 'day').endOf('date').format();
}

export function getEndOfDayBySubtract(days) {
  return moment().subtract(days, 'day').endOf('date');
}

export function getDayName(days) {
  return moment().subtract(days, 'day').format('dddd');
}

export function getTimeStamp(str) {
  return moment(str).unix();
}

export function getFormatStringBySubtract(format, days) {
  return moment().subtract(days, 'day').format(format);
}

export function getTimeStringBySeconds(secs) {
  const minutes = parseInt(secs / 60) % 60;
  const hours = parseInt(secs / 3600);
  if (minutes < 10) {
    return `${hours}h 0${minutes}m`;
  } else {
    return `${hours}h ${minutes}m`;
  }
}