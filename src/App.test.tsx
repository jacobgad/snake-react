import { test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

test("render App element", async () => {
	render(<App />);
	await screen.findByText(/Snake/i);
	cleanup();
});
