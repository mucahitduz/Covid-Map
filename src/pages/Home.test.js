import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { useAppDispatch, useAppSelector } from "../store/index";
import { testUseAppSelector } from "../test/test-app-selector";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("../store/index");

describe("Home", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockImplementation(() => jest.fn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should call dispatch", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const btn = screen.getByTestId("geography");

    userEvent.click(btn);

    expect(useAppDispatch).toHaveBeenCalled();
    expect(useAppDispatch).toHaveBeenCalledWith();
  });
});
