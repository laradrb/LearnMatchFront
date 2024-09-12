import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InfoBar from "../infoBar/InfoBar";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("InfoBar Component", () => {
  it("renders the fields correctly", () => {
    const mockUsername = "TestUser";
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: () => mockUsername,
      },
      writable: true,
    });


    render(
      <MemoryRouter>
        <InfoBar />
      </MemoryRouter>
    );

    expect(screen.getByText(`Welcome, ${mockUsername}`)).toBeInTheDocument();

    const logo = screen.getByAltText("Bell logo");
    expect(logo).toBeInTheDocument();

  });
});