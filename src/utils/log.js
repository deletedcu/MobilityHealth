const logMessage = (title, ...params) => {
  if (__DEV__) {
    console.log(title, ' -> ', ...params, Date.now());
  }
};

const logError = (title, ...params) => {
  if (__DEV__) {
    console.error('ERROR ', title, ' -> ', ...params, Date.now());
  }
};

export {logMessage, logError};