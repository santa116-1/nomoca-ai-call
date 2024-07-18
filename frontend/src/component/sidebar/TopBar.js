import React from 'react';
import History from './History';
import Notification from './Notification';
import Progress from './Progress';
import Setting from './Setting';
import UserMenu from './UserMenu';
const TopBar = () => {
    return (
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none transition-all px-0 py-1 border-b border-[#1A1F36]/20">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-end gap-6">
                <div className="flex items-center justify-end">
                    <a href="#">
                        <UserMenu />
                    </a>
                    <Setting />
                    <Notification />
                    <History/>
                </div>
                <div className="w-[130px] mr-10">
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
