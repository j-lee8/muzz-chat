import { ChevronLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation";

interface HeaderProps {
    name: string;
}

export const Header = ({ name }: HeaderProps ) => {
    const router = useRouter();

    return (
        <header className="text-black p-4 mb-4 text-center font-bold flex flex-row justify-between">
            <button onClick={router.back}><ChevronLeftIcon className="h-6 w-6 text-gray-500" /></button>
            <div className="flex items-center">
                <img src="https://via.placeholder.com/40" className="h-10 w-10 rounded-full object-cover" />
                <h2 className="ml-2">{name}</h2>
            </div>
            <button onClick={() => console.log("Chat menu")}><EllipsisHorizontalIcon className="h-6 w-6 text-gray-500" /></button>
        </header>
    );
}