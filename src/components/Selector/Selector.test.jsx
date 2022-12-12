import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Selector from "./Selector";
import * as reduxHooks from "react-redux";
import styles from "./Selector.module.scss";

const props = {
  "id": 1,
  "types": [
    { "id": 2, "name": "tiny", "price": 0 },
    { "id": 3, "name": "default", "price": 2 },
  ],
  "sizes": [
    { "id": 2, "name": "10", "price": 0 },
    { "id": 3, "name": "12", "price": 2 },
    { "id": 4, "name": "16", "price": 4 },
  ],
  "activeType": { "id": 2, "name": "tiny", "price": 0 },
  "activeSize": { "id": 2, "name": "10", "price": 0 },
};

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-redux"),
  };
});

const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const useSelectorSpy = jest.spyOn(reduxHooks, "useSelector");

describe("Render Selector", () => {
  it("should render with correct types", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    const { debug } = render(<Selector {...props} />);

    for (let type of props.types) {
      expect(screen.getByText(type.name)).not.toBeNull();
    }
  });

  it("should render with correct sizes", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    render(<Selector {...props} />);

    for (let size of props.sizes) {
      expect(screen.getByText(size.name, { exact: false })).not.toBeNull();
    }
  });

  it("should render with correct active size", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    render(<Selector {...props} />);

    const activeSize = screen.getByText(props.activeSize.name, {
      exact: false,
    });

    expect(activeSize).toHaveClass(styles.active);
  });

  it("should render with correct active type", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    render(<Selector {...props} />);

    const activeType = screen.getByText(props.activeType.name, {
      exact: false,
    });

    expect(activeType).toHaveClass(styles.active);
  });
});
