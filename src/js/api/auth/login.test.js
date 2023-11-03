import { login } from "../auth/login.js";

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "12345" }),
    statusText: "OK",
  })
);

// Mocking localStorage
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

// Mocking the headers
const headers = jest
  .fn()
  .mockReturnValue({ "Content-Type": "application/json" });

// Mocking the api path
jest.mock("./../constants.js", () => ({
  apiPath: "/mockedApiPath",
}));

describe("login", () => {
  beforeEach(() => {
    fetch.mockClear();
    headers.mockClear();
    localStorage.clear();
  });

  it("Stores the token in localStorage", async () => {
    const email = "testMail@example.com";
    const password = "testPassword";

    const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/mockedApiPath/social/auth/login", {
      method: "post",
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toBe("12345");

    expect(profile.accessToken).toBeUndefined();
  });
});
