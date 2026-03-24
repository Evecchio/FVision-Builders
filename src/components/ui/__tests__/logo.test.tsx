import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo } from "../logo";

describe("Logo", () => {
  it("renders the logo SVG", () => {
    render(<Logo />);
    const link = screen.getByRole("link");
    expect(link.querySelector("svg")).toBeInTheDocument();
  });

  it("renders text by default", () => {
    render(<Logo />);
    expect(screen.getByText("Fvision")).toBeInTheDocument();
    expect(screen.getByText("Consulting")).toBeInTheDocument();
  });

  it("hides text when showText is false", () => {
    render(<Logo showText={false} />);
    expect(screen.queryByText("Fvision")).not.toBeInTheDocument();
  });

  it("renders as a link to home", () => {
    render(<Logo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#");
  });
});
