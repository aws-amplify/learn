import "@testing-library/jest-dom";

// https://ui.docs.amplify.aws/react/getting-started/troubleshooting#jest
if (typeof window.URL.createObjectURL === "undefined") {
  window.URL.createObjectURL = jest.fn();
}
