import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders card", () => {
  render(<Card title="title" descriptions={["description 1", "description 2"]}/>);
  const card = screen.getByTestId("card-title");
  expect(card).toBeInTheDocument();
});
