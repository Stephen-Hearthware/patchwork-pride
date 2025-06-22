import { render, screen } from "@testing-library/react";
import React from "react";
import FlagGrid from "../src/components/FlagGrid";

test("renders a card for each placeholder flag", () => {
  render(<FlagGrid />);
  const cards = screen.getAllByText(
    /^(Rainbow|Transgender|Bisexual|Asexual|Pansexual|Non-binary)$/,
  );
  expect(cards).toHaveLength(6);
});
