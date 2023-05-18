import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../Loading";

test("should displays image loading", () => {
  // ARRANGE
  render(<Loading />);

  // ASSERT
  expect(screen.getByAltText("Loading")).toBeInTheDocument();
});
