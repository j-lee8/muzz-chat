import { TMessage, TMessageThread } from "../types/messages";

export const sampleMessages: TMessage[] = [
    {
        id: "bc70510d-1541-4a4e-a471-529b74f731a0",
        date: new Date("2024-11-27T10:00:00Z"),
        name: "Famidha",
        isSender: false, // Receiver
        content: "Hi! How are you?",
    },
    {
        id: "f3c78a4e-86a1-41aa-9e23-599026f44272",
        date: new Date("2024-11-27T10:00:20Z"),
        name: "You",
        isSender: true, // Sender
        content: "I'm good, thanks 😀 How about you?",
    },
    {
        id: "42b6011a-2659-4417-bc7a-4a4f03489289",
        date: new Date("2024-11-27T10:02:00Z"),
        name: "You",
        isSender: true,
        content: "What’s on your schedule?",
    },
    {
        id:"079b2916-2265-42d1-ad4c-c21b00b632fc5",
        date: new Date("2024-11-27T13:15:00Z"),
        name: "Famidha",
        isSender: false,
        content: "I'm just working on some code at this awesome company called Muzz",
    },
    {
        id:"079b2916-2265-81d1-ad4c-c21b10b632fc5",
        date: new Date("2024-11-27T13:15:10Z"),
        name: "Famidha",
        isSender: false,
        content: "I really enjoy it!",
    },
    {
        id:"079b2916-2265-81d1-ap4c-c21b10b632fc5",
        date: new Date("2024-11-27T13:15:40Z"),
        name: "Famidha",
        isSender: false,
        content: "What do you do?",
    },
    {
        id:"079b2116-2265-81d1-ap4c-c21b10b632fc5",
        date: new Date("2024-11-27rT14:17:40Z"),
        name: "You",
        isSender: true,
        content: "I'm a credit manager 💰",
    },
];

export const sampleMessageThread: TMessageThread = {
    id: "19259f82-bbbd-4b48-80f1-4b14e1e33ea8",
    date: new Date("2024-11-27T10:00:00Z"),
    messages: sampleMessages
}