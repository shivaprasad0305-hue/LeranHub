const request = require("supertest");
const app = require("../app");

describe("LearnHub Health API", () => {

  test("should return status, uptime and timestamp", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("OK");
    expect(typeof response.body.uptime).toBe("number");
    expect(typeof response.body.timestamp).toBe("string");
    expect(new Date(response.body.timestamp).toISOString())
      .toBe(response.body.timestamp);
  });

});