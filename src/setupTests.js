// Loaded automatically by CRA (react-scripts test).
import '@testing-library/jest-dom';

// Stub media APIs JSDOM doesn't implement (helps with the lofi music player).
Object.defineProperty(global.HTMLMediaElement.prototype, 'play', {
  configurable: true,
  writable: true,
  value: jest.fn().mockResolvedValue(),
});
Object.defineProperty(global.HTMLMediaElement.prototype, 'pause', {
  configurable: true,
  writable: true,
  value: jest.fn(),
});
Object.defineProperty(global.HTMLMediaElement.prototype, 'load', {
  configurable: true,
  writable: true,
  value: jest.fn(),
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;