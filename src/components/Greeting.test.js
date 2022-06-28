import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greetings comonent", () => {
  test("render hello world as text", () => {
    render(<Greetings />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument;
  });

  test("renders it's a good day to test if the button was not clicked", () => {
    render(<Greetings />);
    const goodDayElement = screen.getByText("It's a great day to test");
    expect(goodDayElement).toBeInTheDocument;
  });

  test("Renders changed if the button was clicked", () => {
    render(<Greetings />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const changedElement = screen.getByText("Changed");
    expect(changedElement).toBeInTheDocument;
  });

  test("Does NOT render it's a good day to test when button is clicked", () => {
    render(<Greetings />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const goodDayElementClicked = screen.queryByText("It's a great day to test");
    expect(goodDayElementClicked).not.toBeInTheDocument;
  });
});
