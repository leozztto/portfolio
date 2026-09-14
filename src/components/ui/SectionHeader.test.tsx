import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renderiza método, rota e título", () => {
    render(<SectionHeader method="GET" route="/sobre" title="Sobre" />);

    expect(screen.getByText("GET")).toBeInTheDocument();
    expect(screen.getByText("/sobre")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sobre" })).toBeInTheDocument();
  });
});
