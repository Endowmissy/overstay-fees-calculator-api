import { Router } from 'express';
import ReservationInfoController from '../../controller/reservation.fee.controller';
import { calculateOverStayFeeValidator } from '../../validators/reservations'
const { overStayFeeDues } = ReservationInfoController

const router = Router();

router.post(
  "/calculate-overstay-fee",
  calculateOverStayFeeValidator,
  overStayFeeDues
);

export default router;
