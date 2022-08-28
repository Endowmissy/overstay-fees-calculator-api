import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import baseValidator from './index';


export const calculateOverStayFeeValidator = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    reservation_id: Joi.string().required(),
    actual_checkout_time: Joi.string().required(),
  });
  await baseValidator(schema, req, res, next, 'body');
};
