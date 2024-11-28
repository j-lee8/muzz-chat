
interface IChatInputProps {
    value: string;
    onChange: (value: string) => void;
    handleSendMessage: (isSender: boolean) => void;
}

export const ChatInput = ({ value, onChange, handleSendMessage }: IChatInputProps) => {
    return (
        <footer className="p-4 flex">
            <input
                type="text"
                placeholder="Message Famidha"
                className="w-full p-2 border border-gray-300 rounded-full focus:outline-none"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {/*
                In practice you would never have a "receive" button, but this is to simulate the sending and receiving behaviour.
                Alternatively, I could've added messages to the list after a provided timeout.

                What I would do:
                    - Utilise WebSockets or GraphQL Subscriptions to listen for new messages into the message queue and update the chat thread
            */}
            {value.length > 0 ?
                <>
                    <button className="ml-2 p-2 rounded-md bg-muzzPrimary text-white" onClick={() => handleSendMessage(true)}>Send</button>
                    <button className="ml-2 p-2 rounded-md bg-gray-100 text-black" onClick={() => handleSendMessage(false)}>Receive</button>
                </>
                :
                null
            }
        </footer>
    );
}