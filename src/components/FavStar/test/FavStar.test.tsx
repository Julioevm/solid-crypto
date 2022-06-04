import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// eslint-disable-next-line no-redeclare
import { cleanup, render, screen } from "solid-testing-library";
import { isInDocument } from "solid-dom-testing";
import { FavStar } from "../FavStar";

vi.mock("firebase/analytics");
vi.mock("../../App");

describe("AppBar", () => {
  beforeEach(() => {
    render(() => <FavStar id="test-id" />);
  });
  afterEach(cleanup);

  it("Renders the favourite star input and label", () => {
    const starInput = screen.getByTestId("fav-input");
    const starLabel = screen.getByTestId("fav-label");
    expect(starLabel.classList.contains("fav-star-empty")).toBe(true);
    expect(isInDocument(starInput));
    expect(isInDocument(starLabel));
  });
});
