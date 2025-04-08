import moment from 'moment';

const logger = (
  error: string,
  level: 'info' | 'log' | 'warn' | 'error' = 'log',
): void => {
  switch (level) {
    case 'info':
      console[level](
        `[${level.toUpperCase()}][${moment().format('HH:mm:ss')}] ${error}`,
      );
      break;

    case 'log':
      console[level](
        `[${level.toUpperCase()}][${moment().format('HH:mm:ss')}] ${error}`,
      );
      break;

    case 'warn':
      console[level](
        `[${level.toUpperCase()}][${moment().format('HH:mm:ss')}] ${error}`,
      );
      break;

    case 'error':
      console[level](
        `[${level.toUpperCase()}][${moment().format('HH:mm:ss')}] ${error}`,
      );
  }
};

export default logger;
