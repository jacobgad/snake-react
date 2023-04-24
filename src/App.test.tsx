import { test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

test("render Canva element", async () => {
	render(<App />);
	await screen.findByText(/Canva/i);
	cleanup();
});
