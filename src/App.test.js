import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders form", () => {
  render(<App />);
  const linkElement = screen.getAllByRole("textbox");
  expect(linkElement).toBeInTheDocument();
});
