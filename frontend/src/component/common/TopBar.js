import React from 'react';
import HistoryIcon from '../TopIcons/HistoryIcon';
import NotificationIcon from '../TopIcons/NotificationIcon'
import SettingIcon from '../TopIcons/SettingIcon';
import UserMenuIcon from '../TopIcons/UserMenuIcon';
const TopBar = () => {
    return (
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none transition-all px-0 py-1 border-b border-[#1A1F36]/20">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-end gap-6">
                <div className="flex items-center justify-end">
                    <UserMenuIcon />
                    <SettingIcon />
                    <NotificationIcon />
                    <HistoryIcon />
                </div>
                <div className="w-[130px] mr-10">
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
