import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// eslint-disable-next-line no-redeclare
import { cleanup, fireEvent, render, screen } from "solid-testing-library";
import { isInDocument } from "solid-dom-testing";
import AppBar from "../AppBar";
import { Router } from "solid-app-router";

vi.mock("firebase/analytics");
vi.mock("../../App");

describe("AppBar", () => {
  beforeEach(() => {
    render(() => (
      <Router>
        <AppBar />
      </Router>
    ));
  });
  afterEach(cleanup);

  it("starts with login and register buttons", () => {
    const loginButton = screen.getByTestId("desktop-login-button");
    const registerButton = screen.getByTestId("register-button");
    expect(isInDocument(loginButton));
    expect(isInDocument(registerButton));
  });

  it("shows login form when you click login", async () => {
    const loginButton = screen.getByTestId("desktop-login-button");
    fireEvent.click(loginButton);
    await Promise.resolve();
    const cancelButton = screen.getByTestId("cancel-button");
    const submitButton = screen.getByTestId("submit-button");
    expect(isInDocument(submitButton));
    expect(isInDocument(cancelButton));
  });
});
