
"use client";

import { useState } from "react";
import { TabType } from "./types/tabs";
import { useMessage } from "./context/MessageProvider";
import { v4 as uuidv4 } from "uuid";
import { Header, Tabs, ChatInput, ChatThread } from "./components";

const ChatPage = () => {
    const [selectedTab, setSelectedTab] = useState<TabType>('Chat');
    const [value, setValue] = useState("");
    const { thread, addMessage } = useMessage();

    const handleSendMessage = (isSender: boolean) => {
        if (value.trim() === "") return;

        const newMessage = {
            id: uuidv4(),
            date: new Date(),
            name: isSender ? "You" : "Famidha",
            isSender,
            content: value.trim(),
        };

        addMessage(newMessage);
        setValue("");
    };

    return (
        <div className="flex flex-col h-screen">
            <Header name="Famidha"/>
            <Tabs handleOnTabSelect={(tab: TabType) => setSelectedTab(tab)} selectedTab={selectedTab} />
            {selectedTab === "Chat" ? (
                <>
                    <ChatThread { ...thread } />
                    <ChatInput value={value} onChange={(value) => setValue(value)} handleSendMessage={handleSendMessage} />
                </>)
                : <div className="p-4 flex flex-1 items-center justify-center text-xl font-bold">Profile page 😁</div>
            }
        </div>
    );
}

export default ChatPage;