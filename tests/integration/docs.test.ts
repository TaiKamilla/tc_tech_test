import request from "supertest";
import httpStatus from "http-status";
import app from "../../src/app";

describe("Docs routes", () => {
  describe("GET /v1/docs/", () => {
    test("should return 200 OK", async () => {
      const res = await request(app).get("/v1/docs/");
      expect(res.status).toBe(httpStatus.OK);
    });
  });
});
