/**
 * Centralized logging utility for the application.
 * All console logging should go through this utility to maintain consistency
 * and make it easier to change logging behavior across the entire app.
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
}

class Logger {
  private config: LoggerConfig = {
    level: LogLevel.INFO,
    enableConsole: true,
  };

  /**
   * Configure the logger behavior.
   * @param {Partial<LoggerConfig>} config - Logger configuration
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = {...this.config, ...config};
  }

  /**
   * Log a debug message.
   * @param {string} message - The message to log
   * @param {unknown} [data] - Optional data to include
   */
  debug(message: string, data?: unknown): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      // eslint-disable-next-line no-console
      console.debug(`[DEBUG] ${message}`, data);
    }
  }

  /**
   * Log an info message.
   * @param {string} message - The message to log
   * @param {unknown} [data] - Optional data to include
   */
  info(message: string, data?: unknown): void {
    if (this.shouldLog(LogLevel.INFO)) {
      // eslint-disable-next-line no-console
      console.info(`[INFO] ${message}`, data);
    }
  }

  /**
   * Log a warning message.
   * @param {string} message - The message to log
   * @param {unknown} [data] - Optional data to include
   */
  warn(message: string, data?: unknown): void {
    if (this.shouldLog(LogLevel.WARN)) {
      // eslint-disable-next-line no-console
      console.warn(`[WARN] ${message}`, data);
    }
  }

  /**
   * Log an error message.
   * @param {string} message - The message to log
   * @param {unknown} [error] - Optional error object
   */
  error(message: string, error?: unknown): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      // eslint-disable-next-line no-console
      console.error(`[ERROR] ${message}`, error);
    }
  }

  /**
   * Check if the current log level should be output.
   * @param {LogLevel} level - The log level to check
   * @returns {boolean} True if the level should be logged
   */
  private shouldLog(level: LogLevel): boolean {
    return this.config.enableConsole && level >= this.config.level;
  }
}

// Export a singleton instance
export const logger = new Logger();

// In production, you might want to configure different log levels
if (process.env.NODE_ENV === "production") {
  logger.configure({level: LogLevel.WARN});
}
