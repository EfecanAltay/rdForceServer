import BaseService from "./base-service.js";
import { createLogger, format, transports } from 'winston';
import * as path from "path";

class LoggerService extends BaseService {
    
    _logger = null; 
    constructor() {
        return super();
    }

    async initialize() {
      this._logger = createLogger({
        level: 'info', // min log seviyesi
        format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          format.errors({ stack: true }), // stack trace içersin
          format.json()
        ),
        transports: [
          new transports.File({ filename: path.join(path.dirname('./'), 'logs', 'errors.log'), level: 'error' }),
          new transports.File({ filename: path.join(path.dirname('./'), 'logs', 'combined.log') })
        ],
        exceptionHandlers: [
          new transports.File({ filename: path.join(path.dirname('./'), 'logs', 'exceptions.log') })
        ]
      });

      // Geliştirme ortamında konsola da renkli bas
      if (process.env.NODE_ENV !== 'production') {
        this._logger.add(new transports.Console({
          format: format.combine(
            format.colorize(),
            format.simple()
          )
        }));
      }
    }
}

export default LoggerService;