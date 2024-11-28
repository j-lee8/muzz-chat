
"use client";

import { TMessage, TMessageThread } from "../types/messages";
import { sampleMessageThread } from "../data/messages";
import { createContext, useContext, useState } from "react";

interface MessageContextType {
    addMessage: (message: TMessage) => void;
    thread: TMessageThread;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

interface MessageProviderProps {
    children: React.ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
    const [thread, setThread] = useState<TMessageThread>(sampleMessageThread);

    const addMessage = (message: TMessage) => {
        setThread((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    };

    return (
        <MessageContext.Provider value={{ addMessage, thread }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = (): MessageContextType => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error("useMessage must be used within a MessageProvider");
    }
    return context;
};
