import React from 'react';

interface SidebarProps {
 isOpen: boolean;
 onClose: () => void;
 children:React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, }) => {
 return (
 <div
 className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white
 transform transition-transform duration-300 ease-in-out
 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
 lg:translate-x-0 lg:static lg:w-64`}
 >
 {/* Sidebar Content */}
 <div className="flex flex-col h-screen justify-between">
 <div>
 {/* Header / Logo */}
 <div className="p-4 border-b border-gray-700">
 <h1 className="text-2xl font-semibold">Welcome to Admin </h1>
 </div>

 {/* Navigation Links */}
 <nav className="p-4">
 <ul>
 <li className="mb-2">
 <a href="#" className="block hover:bg-gray-700 p-2 rounded">
 Dashboard
 </a>
 </li>
 <li className="mb-2">
 <a href="#" className="block hover:bg-gray-700 p-2 rounded">
 Settings
 </a>
 </li>
 {/* Add more links here */}
 </ul>
 </nav>
 </div>

 {/* Footer */}
 <div className="p-4 border-t border-gray-700">
 <p>&copy; 2024 Your Company</p>
 </div>
 </div>
 </div>
 );
};

export default Sidebar;
