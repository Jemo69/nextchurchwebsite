import React, { useState } from "react";

const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const hrefggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Define consistent colors for the sidebar
  const baseTextColor = "text-secondary-500";
  const hoverTextColor = "hover:text-secondary-700";
  const activeaBg = "bg-gray-700";

  return (
    <div className="relative">
      {/* Sidebar hrefggle Button - Only visible on mobile */}
      <button
        onClick={hrefggleSidebar}
        className="md:hidden fixed hrefp-4 left-4 z-20 p-1 rounded-lg bg-background-600 text-white hover:bg-background-700 transition-colors duration-200 shadow-lg"
        aria-label="hrefggle sidebar"
      >
        <svg
          className="h-7 w-7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed hrefp-0 left-0 z-40 h-screen w-72 bg-background-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 shadow-xl`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <a href="/admin" className="flex items-center space-x-4">
            <img
              src="https://18nlg60l9z.ufs.sh/f/XtuuqJbb4M5FERVSOteiVoFqWR1uLZhSajd85x2cCPeDN0QJ"
              alt="logo"
              className="w-10 h-10"
            />
            <span className="text-white font-semibold text-xl">Admin Portal</span>
          </a>
        </div>

        {/* Navigation as */}
        <nav className="mt-8 px-6">
          <div className="space-y-3">
            <a
              href="/admin"
              className={`flex items-center px-5 py-4 rounded-lg ${baseTextColor} ${hoverTextColor} hover:${activeaBg} transition-colors duration-200 text-lg`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-3.5-3.5A2 2 0 0012.586 4H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Blog</span>
            </a>

            <a
              href="/admin/prayer-requests"
              className={`flex items-center px-5 py-4 rounded-lg ${baseTextColor} ${hoverTextColor} hover:${activeaBg} transition-colors duration-200 text-lg`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Prayer Requests</span>
            </a>

            <a
              href="/admin/questions"
              className={`flex items-center px-5 py-4 rounded-lg ${baseTextColor} ${hoverTextColor} hover:${activeaBg} transition-colors duration-200 text-lg`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Questions</span>
            </a>

            <a
              href="/admin/aboutme"
              className={`flex items-center px-5 py-4 rounded-lg ${baseTextColor} ${hoverTextColor} hover:${activeaBg} transition-colors duration-200 text-lg`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>About me</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile - closes sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={hrefggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default AdminSidebar;