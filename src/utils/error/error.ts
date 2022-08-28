import constants from '../constants';
const { INTERNAL_SERVER_ERROR } = constants;

/**
 * A custom error class for handling module related errors.
 *
 * @class ModuleError
 */
 export class ModuleError extends Error {
    status: string | number;
    errors?: Array<any[]>;
    /**
    * The ModuleError Constructor.
    * @param {Object} options - A configuration object for errors.
    * @param {String} options.message - The error message if any.
    * @param {Array} options.errors - Additional error details if any.
    * @constructor ModuleError
    */
    constructor(options: Record<string, any> = {}) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = options.message;
      this.status = options.status;
      if (options.errors) this.errors = options.errors;
    }
  }

/**
 * A custom error class for handling Api errors.
 *
 * @class ApiError
 */
 export class ApiError extends ModuleError {
    /**
      * The ApiError Constructor.
      * @param {Object} options - A configuration object for errors.
      * @param {String} options.message - The error message if any.
      * @param {Number} options.status - The status code of error if any.
      * @param {Array} options.errors - Additional error details if any.
      * @constructor ApiError
      */
    constructor(options: Record<string, any> = {} = {}) {
      super(options);
      this.name = this.constructor.name;
      this.message = options.message || INTERNAL_SERVER_ERROR;
      this.status = options.status || 500;
    }
}
