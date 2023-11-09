import { login } from "../auth/login.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "12345" }),
    statusText: "OK",
  })
);

const mockStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, "localStorage", { value: mockStorage });

describe("login", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Stores the token in localStorage", async () => {
    const email = "testMail@example.com";
    const password = "testPassword";

    await login(email, password);

    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toBe("12345");
  });
});
