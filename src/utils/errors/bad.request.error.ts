import ApplicationError  from './application.error'
/**
 * A custom error class for handling Bad request errors.
 *
 * @class Bad Request Error
 */
class BadRequestError extends ApplicationError {
    /**
      * The Bad Request Error Constructor.
      * @param {String} message - The error message if any.
      * @constructor Bad Request Error
      */
    constructor(message?: string) {
        super(message, 'Bad request', 400)
    }
}

export default BadRequestError;
