import React from 'react'
import { Bell, Search, Settings } from "lucide-react";

const TopNavbar = () => {
  return (
    <>
      <div className="w-full bg-white shadow px-6 py-3 flex items-center justify-between sticky top-0 z-30">
        {/* Left: Search */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Right: Icons & Profile */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Settings */}
          <button>
            <Settings className="h-6 w-6 text-gray-600 hover:text-blue-600" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-9 h-9 rounded-full border"
            />
            <span className="hidden sm:inline font-medium text-gray-700">
              Admin
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavbar
