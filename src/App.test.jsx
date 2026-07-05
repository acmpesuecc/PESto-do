import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { LOFI_STREAM_URL } from "./config/lofi";

describe("App - Play Lofi toggle", () => {
  it("uses the configured stream, reports load failures, and clears errors on pause", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    const playBtn = screen.getByRole("button", { name: /play lofi/i });
    expect(playBtn).toBeInTheDocument();
    expect(container.querySelector("audio")).toBeNull();

    await user.click(playBtn);

    const pauseBtn = screen.getByRole("button", { name: /pause lofi/i });
    expect(pauseBtn).toBeInTheDocument();

    const audioEl = container.querySelector("audio");
    expect(audioEl).not.toBeNull();

    const sourceEl = container.querySelector("audio source");
    expect(sourceEl).not.toBeNull();
    expect(sourceEl.getAttribute("src")).toBe(LOFI_STREAM_URL);

    fireEvent.error(audioEl);
    expect(screen.getByRole("alert")).toHaveTextContent(/unable to load the lofi stream/i);

    await user.click(pauseBtn);

    expect(container.querySelector("audio")).toBeNull();
    expect(screen.getByRole("button", { name: /play lofi/i })).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
