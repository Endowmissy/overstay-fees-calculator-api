import { Request, Response, NextFunction } from 'express';

interface IMiddleware {
    req: Request,
    res: Response,
    next: NextFunction
}

const asyncHandler = (fn: any) => (params: IMiddleware ) => {
    Promise.resolve(fn(params.req, params.res, params.next)).catch(params.next);
  };

export default asyncHandler;
