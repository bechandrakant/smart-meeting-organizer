import { render, screen } from "@testing-library/react";
import Button from "./Button"

test("renders button with given label", () => {
  render(<Button label="test"/>);
  const button = screen.getByTestId("button-test");
  expect(button).toBeInTheDocument();
});
