const generatePassword = require("../generatePassword");

describe("generatePassword", () => {

  test("defaults to length 8", () => {
    const password = generatePassword();
    expect(password.length).toBe(8);
  });

  test("generates password of specified length", () => {
    const password = generatePassword(12);
    expect(password.length).toBe(12);
  });

  test("generates lowercase-only password", () => {
    const password = generatePassword(10, true, false, false);
    expect(password).toMatch(/^[a-z]+$/);
  });

  test("generates uppercase-only password", () => {
    const password = generatePassword(10, false, true, false);
    expect(password).toMatch(/^[A-Z]+$/);
  });

  test("generates numbers-only password", () => {
    const password = generatePassword(10, false, false, true);
    expect(password).toMatch(/^[0-9]+$/);
  });

  test("generates mixed character password", () => {
    const password = generatePassword(20, true, true, true);

    expect(password).toMatch(/^[A-Za-z0-9]+$/);
  });

  test("defaults to lowercase if no character types selected", () => {
    const password = generatePassword(10, false, false, false);

    expect(password).toMatch(/^[a-z]+$/);
  });

});