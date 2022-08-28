/* eslint-disable import/no-cycle */
import { Router } from 'express';
import ReservationInfoRoute from './reservation.fee.routes';

const router = Router();

router.use('/reservation', ReservationInfoRoute);

export default router;
