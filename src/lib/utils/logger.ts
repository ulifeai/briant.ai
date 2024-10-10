
// src/utils/logger.ts
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info', // Change as needed (e.g., 'debug', 'error')
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'your-service-name' },
    transports: [
        new transports.Console(),
        // You can add more transports like File or HTTP as needed
        // new transports.File({ filename: 'error.log', level: 'error' }),
        // new transports.File({ filename: 'combined.log' }),
    ],
});

export default logger;
