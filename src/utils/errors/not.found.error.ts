import ApplicationError from './application.error'
/**
 * A custom error class for handling Not found errors.
 *
 * @class Not Found Error
 */
class NotFoundError extends ApplicationError {
    /**
      * The Not Found Error Constructor.
      * @param {String} message - The error message if any.
      * @constructor Not Found Error
      */
    constructor(message?: string) {
        super(message, 'Not Found', 404)
    }
}

export default NotFoundError;
