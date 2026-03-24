import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock chat-modal to avoid Google GenAI dependency
vi.mock("@/components/chat-modal", () => ({
  ChatModal: () => null,
}));

// Mock logo to simplify
vi.mock("@/components/ui/logo", () => ({
  Logo: ({ showText }: { showText?: boolean }) => (
    <a href="#">{showText !== false && "FVISION"}</a>
  ),
}));

import { Navbar } from "../navbar";

describe("Navbar", () => {
  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Servicios")).toBeInTheDocument();
    expect(screen.getByText("Sobre Mí")).toBeInTheDocument();
    expect(screen.getByText("Casos de Éxito")).toBeInTheDocument();
    expect(screen.getByText("Testimonios")).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<Navbar />);
    const buttons = screen.getAllByText("Presupuesto Automático");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("has accessible mobile menu button", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: "Abrir menú" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles mobile menu on button click", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: "Abrir menú" });
    fireEvent.click(menuButton);
    expect(
      screen.getByRole("button", { name: "Cerrar menú" })
    ).toHaveAttribute("aria-expanded", "true");
  });

  it("closes mobile menu on Escape key", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: "Abrir menú" });
    fireEvent.click(menuButton);
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Abrir menú" })).toBeInTheDocument();
  });

  it("has desktop nav with aria-label", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("navigation", { name: "Navegación principal" })
    ).toBeInTheDocument();
  });
});
