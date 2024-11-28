import { differenceInHours, differenceInSeconds, format } from "date-fns";
import { ChatBubble, DateSeparator } from ".";
import { TMessage, TMessageThread } from "../types/messages";
import React, { useEffect, useRef } from "react";

export const ChatThread = (thread: TMessageThread ) => {
    const chatRef = useRef<HTMLDivElement>(null);

    // Scroll to the bottom when message is sent
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [thread.messages]);

    // TODO: Place these helper functions into utils.
    const shouldShowDateSeparator = (
        currentMessage: TMessage,
        prevMessage: TMessage | undefined
    ): boolean => {
        if (!prevMessage) return true;
        return differenceInHours(currentMessage.date, prevMessage.date) >= 1;
    };

    const isMessageGrouped = (
        currentMessage: TMessage,
        prevMessage: TMessage | undefined
    ): boolean => {
        if (!prevMessage) return false;
        return (
            prevMessage.name === currentMessage.name &&
            differenceInSeconds(currentMessage.date, prevMessage.date) <= 20
        );
    };

    return (
        <main ref={chatRef} className="flex-1 overflow-y-auto p-4 justify-end">
            <div className="flex flex-col justify-end min-h-full">
                <DateSeparator date={thread.date} />

                <div className="text-center text-xl font-bold my-4">You matched 🎈</div>

                {thread.messages.map((message, index) => {
                    const prevMessage = thread.messages[index - 1];
                    const showDateSeparator = shouldShowDateSeparator(
                        message,
                        prevMessage
                    );
                    const grouped = isMessageGrouped(message, prevMessage);

                    return (
                        <React.Fragment key={message.id}>
                            {showDateSeparator && (
                                <div className="text-center text-gray-500 text-xs mt-4">
                                    {format(message.date, "MMMM d, yyyy h:mm a")}
                                </div>
                            )}

                            <ChatBubble
                                {...message}
                                isGrouped={grouped}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </main>
    );
}