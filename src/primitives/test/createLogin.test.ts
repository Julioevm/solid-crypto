import * as auth from "firebase/auth";
import { createLogin } from "./../createLogin";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("firebase/auth", () => {
  return {
    getAuth: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
  };
});

vi.mock("firebase/analytics");
vi.mock("../../App");

describe("createLogin()", () => {
  const email = "test@me.com";
  const validPassword = "123456";
  const invalidPassword = "0000";
  const signInWithEmailAndPassword = vi.spyOn(
    auth,
    "signInWithEmailAndPassword"
  );

  const userCredential = {
    user: { refreshToken: "test-token", email: email, displayName: "john" },
  };

  beforeEach(() => {
    // Mock session storage
    sessionStorage.setItem = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns true for a valid login", () => {
    signInWithEmailAndPassword.mockResolvedValue(userCredential as any);
    expect(createLogin(email, validPassword)).toBe(true);
  });

  it("returns false for an invalid login", () => {
    signInWithEmailAndPassword.mockRejectedValueOnce(() => {
      throw new Error("Invalid Password");
    });
    expect(createLogin(email, invalidPassword)).toBe(false);
  });
});
