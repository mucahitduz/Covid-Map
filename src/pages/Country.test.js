import { render } from "@testing-library/react";
import Country from "./Country";
import { useAppDispatch, useAppSelector } from "../store/index";
import { testUseAppSelector } from "../test/test-app-selector";
import { BrowserRouter } from "react-router-dom";

jest.mock("../store/index");

describe("Country", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockImplementation(() => jest.fn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render data", () => {
    render(
      <BrowserRouter>
        <Country />
      </BrowserRouter>
    );

    expect(useAppDispatch).toHaveBeenCalled();
    expect(useAppDispatch).toHaveBeenCalledWith();
  });
});
