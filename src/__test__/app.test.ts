import request from "supertest";
import app from "../app";

describe("Simple Test", () => {
  test("server test", () => {
    expect(2 + 2).toEqual(4);
  });

  test("should be response hello", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("hello");
  });
});
