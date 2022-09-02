import constants from '../constants';

const { INTERNAL_SERVER_ERROR } = constants;
/**
 * A custom error class for handling Api errors.
 *
 * @class ApiError
 */
 class ApplicationError extends Error {
    status: string;
    statusCode: number;
    /**
      * The ApplicationError Constructor.
      * @param {String} message - The error message if any.
      * @param {String} status - The status of the error
      * @param {Number} statusCode - The status code of error if any.
      * @constructor ApplicationError
      */
    constructor(message?: string, status?: string, statusCode?: number) {
      super()
      this.message = message || INTERNAL_SERVER_ERROR;
      this.status = status || 'error';
      this.statusCode = statusCode || 500;
    }
}

export default ApplicationError;
