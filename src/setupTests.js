// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Ignora warnings de source maps de dependências
console.warn = (msg, ...args) => {
  if (
    typeof msg === "string" &&
    msg.includes("Failed to parse source map")
  ) {
    return;
  }
  // Chama o console.warn original
  return global.console.warn(msg, ...args);
};
