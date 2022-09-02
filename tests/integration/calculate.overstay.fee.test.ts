import request from 'supertest';
import { app } from '../../src/config';

describe("overstay fee calculation", () => {
  test("should calculate overstay fee successfully", async () => {
    const response = await request(app)
      .post("/api/v1/reservation/calculate-overstay-fee")
      .set("Content-Type", "application/json")
      .send({
        reservation_id: "12002",
        actual_checkout_time: "21:00",
      });

    expect(response.status).toEqual(201);
    expect(response.body.message).toBe("Overstay dues calculated successfully");
  });

  test("should not calculate overstay fee if reservation id field is empty", async () => {
    const response = await request(app)
      .post("/api/v1/reservation/calculate-overstay-fee")
      .set("Content-Type", "application/json")
      .send({
        reservation_id: "",
        actual_checkout_time: "21:00",
      });

    expect(response.status).toEqual(400);
    expect(response.body.message).toBe("reservation_id is not allowed to be empty");
  })
  test("should not calculate overstay fee if actual_checkout_time field is empty", async () => {
    const response = await request(app)
      .post("/api/v1/reservation/calculate-overstay-fee")
      .set("Content-Type", "application/json")
      .send({
        reservation_id: "12002",
        actual_checkout_time: "",
      });

    expect(response.status).toEqual(400);
    expect(response.body.message).toBe("actual_checkout_time is not allowed to be empty");
  })
  test("should not calculate overstay fee if reservation details does not exist", async () => {
    const response = await request(app)
      .post("/api/v1/reservation/calculate-overstay-fee")
      .set("Content-Type", "application/json")
      .send({
        reservation_id: "12015",
        actual_checkout_time: "13:00",
      });

    expect(response.status).toEqual(404);
    expect(response.body.message).toBe("Reservation details does not exist");
  })
});
