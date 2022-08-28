import { Request, Response } from 'express';
import constants from '../constants';
import ApplicationError from '../errors/application.error';

const { FAIL, SUCCESS, INTERNAL_SERVER_ERROR } = constants;
const serverError = new ApplicationError(INTERNAL_SERVER_ERROR, 'error', 500)

/**
 *Contains Helper methods
 * @class Helper
 */
class Helper {
  /**
   * Generates a JSON response for failure scenarios.
   * @static
   * @param {Request} req - Request object.
   * @param {Response} res - Response object.
   * @param {object} error - The error object.
   * @param {number} error.status -  HTTP Status code, default is 500.
   * @param {string} error.message -  Error message.
   * @param {object|array} error.errors -  A collection of  error message.
   * @memberof Helpers
   * @returns {JSON} - A JSON failure response.
   */
  static errorResponse(req: Request, res: Response, error: any) {
    const accumulateError = { ...serverError, ...error };
    return res.status(accumulateError.status).json({
      type: FAIL,
      message: accumulateError.message,
      errors: accumulateError.errors
    });
  }

  static successResponse = (res: Response, message: string, statusCode: number, data: any) => {
    return res.status(statusCode).json({
      type: SUCCESS,
      message,
      data,
    });
  };
}

export default Helper;
