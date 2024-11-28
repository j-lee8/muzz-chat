
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ChatPage from "./page";
import { MessageProvider } from "./context/MessageProvider";

describe("Chat page", () => {
    it("should render the page", async() => {
        render(
            <MessageProvider>
                <ChatPage />
            </MessageProvider>
        );

        expect(screen.getByText("Chat")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("should allow the user and receiver to send messages", async() => {
        render(
            <MessageProvider>
                <ChatPage />
            </MessageProvider>
        );

        const input = screen.getByPlaceholderText(/Message/i);
        await userEvent.type(input, "Hello!" );

        const sendButton = screen.getByText("Send");
        userEvent.click(sendButton);

        await waitFor(() => {
            expect(screen.getByText("Hello!")).toBeInTheDocument();
            expect(input).toHaveValue("");
        });

        await userEvent.type(input, "hello from Famidha! 😀");
        const receiveButton = screen.getByText("Receive");
        userEvent.click(receiveButton);

        await waitFor(() => {
            expect(screen.getByText("hello from Famidha! 😀")).toBeInTheDocument();
            expect(input).toHaveValue("");
        });
    });

    it("should render multiple messages with date stamps dividing them", async() => {
        render(
            <MessageProvider>
                <ChatPage />
            </MessageProvider>
        );
    
        expect(screen.getByText("November 27, 2024 10:00 AM")).toBeInTheDocument();
        expect(screen.getByText("November 27, 2024 1:15 PM")).toBeInTheDocument();
    });
});