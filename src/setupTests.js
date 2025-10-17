// src/setupTests.js
import '@testing-library/jest-dom';

// Mock audio/video methods (needed for LofiPlayer tests)
Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  value: jest.fn().mockResolvedValue(),
});
Object.defineProperty(window.HTMLMediaElement.prototype, "pause", {
  value: jest.fn(),
});
