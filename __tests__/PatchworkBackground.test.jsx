import { render, screen } from "@testing-library/react";
import React from "react";
import PatchworkBackground from "../src/components/PatchworkBackground";

test("renders six interactive patches", () => {
  render(<PatchworkBackground />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(6);
});
