import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from ".";

describe("Header", () => {
    it("should render the header with the provided name", async() => {
        render(<Header name="Jamie" />);
        expect(screen.getByText("Jamie")).toBeInTheDocument();
    });
});