import { render, screen, fireEvent } from "@testing-library/react";
import Checklist from "./Checklist";

const getItems = () =>
  screen.getAllByRole("checkbox").filter((cb) => cb !== screen.getByLabelText(/select all/i));

describe("Checklist", () => {
  beforeEach(() => localStorage.clear());

  it("renders items and toggles one", () => {
    render(<Checklist items={["A","B"]} />);
    const [a] = getItems();
    fireEvent.click(a);
    expect(a).toBeChecked();
  });

  it("select-all toggles everything", () => {
    render(<Checklist items={["A","B"]} />);
    const selectAll = screen.getByLabelText(/select all/i);
    fireEvent.click(selectAll);
    getItems().forEach((c) => expect(c).toBeChecked());
  });

  it("persists to localStorage", () => {
    const key = "checklist:test";
    render(<Checklist items={["A"]} storageKey={key} />);
    const [a] = getItems();
    fireEvent.click(a);
    const saved = JSON.parse(localStorage.getItem(key));
    expect(saved[0].done).toBe(true);
  });
});
