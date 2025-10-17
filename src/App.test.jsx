import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App – Play Lofi toggle", () => {
  it("shows 'Play Lofi' initially, then adds <audio> with stream when clicked, and removes it on pause", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    // Initially: Play Lofi button is visible, no audio element
    const playBtn = screen.getByRole("button", { name: /play lofi/i });
    expect(playBtn).toBeInTheDocument();
    expect(container.querySelector("audio")).toBeNull();

    // Click Play → button toggles to Pause, audio mounts with correct source
    await user.click(playBtn);

    // Button now says Pause Lofi
    const pauseBtn = screen.getByRole("button", { name: /pause lofi/i });
    expect(pauseBtn).toBeInTheDocument();

    // Audio element exists
    const audioEl = container.querySelector("audio");
    expect(audioEl).not.toBeNull();

    // Verify the <source src="https://ec3.yesstreaming.net:3755/stream">
    const sourceEl = container.querySelector("audio source");
    expect(sourceEl).not.toBeNull();
    // JSDOM resolves to absolute URLs, so we check it contains the expected host/path
    expect(sourceEl.getAttribute("src")).toContain("ec3.yesstreaming.net:3755/stream");

    // Click Pause → audio removed, button back to Play
    await user.click(pauseBtn);
    expect(container.querySelector("audio")).toBeNull();
    expect(screen.getByRole("button", { name: /play lofi/i })).toBeInTheDocument();
  });
});
