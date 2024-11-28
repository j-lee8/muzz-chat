import { TMessage } from "../types/messages";

export const ChatBubble = ({
    content,
    isSender,
    isGrouped,
}: TMessage & { isGrouped: boolean }) => {
    return (
        <div
            className={`flex flex-col ${
                isSender ? "items-end" : "items-start"
            } ${isGrouped ? "mt-1" : "mt-4"}`}
        >
            <div
                className={`inline-block ${
                    isSender
                        ? "bg-muzzPrimary text-white"
                        : "bg-gray-100 text-black"
                } p-3 rounded-2xl max-w-[75%]`}
            >
                <p>{content}</p>
            </div>
        </div>
    );
};
