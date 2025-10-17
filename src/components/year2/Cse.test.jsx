import { render, screen, fireEvent } from "@testing-library/react";
import Cse from "./Cse";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Cse", () => {
  beforeEach(() => mockNavigate.mockClear());

  it("toggles courses", () => {
    const toggleCourses = jest.fn();
    render(
      <MemoryRouter>
        <Cse isYear2Open={false} toggleCourses={toggleCourses} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /show courses/i }));
    expect(toggleCourses).toHaveBeenCalledWith(2);
  });

  it("navigates to a course", () => {
    render(
      <MemoryRouter>
        <Cse isYear2Open={true} toggleCourses={() => {}} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /digital design/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/year2/cse/ddco");
  });
});

