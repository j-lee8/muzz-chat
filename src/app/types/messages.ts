export type TMessage = {
    id: string;
    name: string;
    date: Date;
    isSender: boolean;
    content: string;
}

export type TMessageThread = {
    id: string;
    date: Date;
    messages: TMessage[]
}