import { render, screen } from "@testing-library/react";
import React from "react";
import PatchworkBackground from "../src/components/PatchworkBackground";

test("renders six flag patches", () => {
  render(<PatchworkBackground />);
  const images = screen.getAllByRole("img", { hidden: true });
  expect(images).toHaveLength(6);
});
