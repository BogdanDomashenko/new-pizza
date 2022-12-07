import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe("Input component", () => {
  //add typing event
  it("should render input and has class", () => {
    const handleChange = jest.fn();
    render(<Input value="text" onChange={handleChange} />);

    const input = screen.getByDisplayValue("text");
  });

  it("should render label", () => {
    const handleChange = jest.fn();
    render(<Input label="Hello word!" onChange={handleChange} />);

    screen.getByText("Hello word!");
  });

  it("should render error", () => {
    const handleChange = jest.fn();
    render(<Input error="Some error!" onChange={handleChange} />);

    screen.getByText("Some error!");
  });
});
