import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo } from "../logo";

describe("Logo", () => {
  it("renders the logo image with correct alt text", () => {
    render(<Logo />);
    expect(screen.getByAltText("FVision Logo")).toBeInTheDocument();
  });

  it("renders text by default", () => {
    render(<Logo />);
    expect(screen.getByText("FVISION")).toBeInTheDocument();
  });

  it("hides text when showText is false", () => {
    render(<Logo showText={false} />);
    expect(screen.queryByText("FVISION")).not.toBeInTheDocument();
  });

  it("applies custom iconSize", () => {
    render(<Logo iconSize={64} />);
    const img = screen.getByAltText("FVision Logo");
    expect(img).toHaveStyle({ height: "64px" });
  });

  it("renders as a link", () => {
    render(<Logo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#");
  });
});
