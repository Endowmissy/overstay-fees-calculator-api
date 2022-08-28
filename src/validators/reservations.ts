import Joi from 'joi';

export const calculateOverStayFeeValidation: any = Joi.object({
    customer_id: Joi.string().required(),
    actual_checkout_time: Joi.string().required(),
})
