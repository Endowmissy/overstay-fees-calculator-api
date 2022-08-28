const winston = require("winston");
import dotenv from "dotenv";
dotenv.config();

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

let logConfiguration: { transports: any[]; format: any };

if (process.env.NODE_ENV !== "development") {
  logConfiguration = {
    transports: [
      new winston.transports.Console({
        level: "error",
        handleExceptions: true,
        json: false,
        colorize: true,
      }),
      new winston.transports.File({
        level: "info",
        filename: "logs/server.log",
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
      }),
    ],
    format: winston.format.combine(
      winston.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
      }),
      winston.format.printf(
        (info: { level: any; timestamp: any; message: any; }) =>
          `${info.level}: ${[info.timestamp]}: ${info.message}`
      )
    ),
  };
} else {
  logConfiguration = {
    transports: [
      new winston.transports.Console({
        level: "debug",
        handleExceptions: true,
        json: false,
        colorize: false,
      }),
      new winston.transports.File({
        level: "info",
        filename: "logs/server.log",
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
      }),
    ],
    format: winston.format.combine(
      winston.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
      }),
      winston.format.printf(
        (info: { level: any; timestamp: any; message: any; }) =>
          `${info.level}: ${[info.timestamp]}: ${info.message}`
      )
    ),
  };
}

const logger = winston.createLogger(logConfiguration);

logger.stream = {
  write: (message: any, encoding: any) => {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

export default logger;
