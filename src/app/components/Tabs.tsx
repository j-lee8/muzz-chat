import { TabType } from "../types/tabs";

interface TabsProps {
    handleOnTabSelect: (name: TabType) => void;
    selectedTab: "Chat" | "Profile";
}

export const Tabs = ({ handleOnTabSelect, selectedTab }: TabsProps) => {
    return (
        <div className="text-muzzPrimary flex justify-around sticky top-0 z-10 border-b shadow-md">
            <button
                onClick={() => handleOnTabSelect('Chat')}
                className={`flex-1 rounded-t-lg border-b-2 p-2 ${
                    selectedTab === 'Chat' ? 'text-muzzPrimary border-muzzPrimary font-bold' : 'text-gray-500 border-transparent'
                } hover:text-muzzPrimary hover:border-muzzPrimary focus:outline-none`}
            >
                Chat
            </button>

            <button
                onClick={() => handleOnTabSelect('Profile')}
                className={`flex-1 rounded-t-lg border-b-2 p-2 ${
                    selectedTab === 'Profile' ? 'text-muzzPrimary border-muzzPrimary font-bold' : 'text-gray-500 border-transparent'
                } hover:text-muzzPrimary hover:border-muzzPrimary focus:outline-none`}
            >
                Profile
            </button>
        </div>
    );
}