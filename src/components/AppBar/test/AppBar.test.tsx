import { afterEach, describe, expect, it, vi } from "vitest";
// eslint-disable-next-line no-redeclare
import { cleanup, render, screen } from "solid-testing-library";
import { isInDocument } from "solid-dom-testing";
import AppBar from "../AppBar";
import { Router } from "solid-app-router";

vi.mock("firebase/analytics");
vi.mock("../../App");

describe("AppBar", () => {
  afterEach(() => {
    cleanup;
  });

  it("it starts with login and register buttons", () => {
    render(() => (
      <Router>
        <AppBar />
      </Router>
    ));
    const loginButton = screen.getByTestId("login-button");
    const registerButton = screen.getByTestId("register-button");
    expect(isInDocument(loginButton));
    expect(isInDocument(registerButton));
  });
});
