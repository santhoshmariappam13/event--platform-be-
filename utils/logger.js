const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',  
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),  
    new winston.transports.File({ filename: 'combined.log' })  
  ],
});

const logInfo = (message) => {
  logger.info(message);
};

const logError = (message) => {
  logger.error(message);
};

module.exports = { logInfo, logError };
