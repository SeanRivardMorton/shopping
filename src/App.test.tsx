import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("test happy path of application", () => {
  test("receipt displays what is expected", () => {
    render(<App />);

    const addFaceMaskButton = screen.getByTitle(/add Face Mask/i);
    userEvent.click(addFaceMaskButton);
    userEvent.click(addFaceMaskButton);

    const addToiletPaperButton = screen.getByTitle(/add Toilet Paper/i);
    userEvent.click(addToiletPaperButton);
    userEvent.click(addToiletPaperButton);
    userEvent.click(addToiletPaperButton);
    userEvent.click(addToiletPaperButton);
    userEvent.click(addToiletPaperButton);
    userEvent.click(addToiletPaperButton);

    const addHandSanitizerButton = screen.getByTitle(/add Hand Sanitizer/i);
    userEvent.click(addHandSanitizerButton, {}, { clickCount: 1 });

    const handSanitizerVolumeTextInput = screen.getByLabelText(/quantity/i);

    userEvent.type(handSanitizerVolumeTextInput, "5");
    const subTotalText = screen.getByTestId(/Sub-total 12.40/i);
    expect(subTotalText).toBeInTheDocument();

    const faceMaskDiscount = screen.getByTestId(/Face Mask 2 for £4 -1.00/i);
    expect(faceMaskDiscount).toBeInTheDocument();
    const toiletPaperDiscount = screen.getByTestId(
      /Toilet Paper 6 for 5 -0.65/i
    );
    expect(toiletPaperDiscount).toBeInTheDocument();

    const totalSavings = screen.getByTestId(/Total savings -1.65/i);
    expect(totalSavings).toBeInTheDocument();

    const totalToPay = screen.getByTestId(/Total to Pay 10.75/i);
    expect(totalToPay).toBeInTheDocument();
  });
});
