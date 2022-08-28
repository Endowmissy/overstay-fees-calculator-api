import { Request, Response, NextFunction } from 'express';
import Helper  from '../utils/helpers/helpers';
import ApplicationError from '../utils/errors/application.error';

const { errorResponse } = Helper;

const baseValidator = async (
  schema:any, req: Request, res: Response, next: NextFunction, type: string
  ) => {
  try {
    const getReqType: Record<string, any>  = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };
    getReqType[type] = await schema.validateAsync(getReqType[type]);
    return next();
  } catch (error) {
    const err = new ApplicationError(error.message.replace(/[\"]/gi, ''), 'error', 400)
    return errorResponse(req, res, err);
  }
};

export default baseValidator;
