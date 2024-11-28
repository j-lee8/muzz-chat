import { format } from "date-fns"

interface DateSeparatorProps {
    date: Date;
}

export const DateSeparator = ({ date }: DateSeparatorProps) => {
    return (
        <div className="text-center text-gray-500 text-xs">
            <span className="font-bold">
                {format(date, "MMMM d, yyyy")}
            </span>{" "}
            <span>
                {format(date, "h:mm a")}
            </span>
        </div>
    );
}