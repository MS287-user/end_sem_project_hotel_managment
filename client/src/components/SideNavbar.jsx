// src/components/SideNavbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCartIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  FolderIcon,
  CubeIcon,
  ChatBubbleLeftEllipsisIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { MegaphoneIcon, UserCircleIcon } from "lucide-react";

const menu = [
  {
    title: "ADMIN",
    items: [
      { name: "Dashboard", icon: ChartBarIcon, path: "/admin/dashboard" },
      { name: "Staff", icon: ShoppingCartIcon, path: "/admin/staff" },
      { name: "Rooms", icon: RocketLaunchIcon, path: "/admin/rooms" },
      { name: "Reservations", icon: ClipboardDocumentListIcon, path: "/admin/reservation" },
      { name: "Check-In/Out", icon: CalendarDaysIcon, path: "/admin/checkinout" },
      { name: "Billing", icon: ClipboardDocumentCheckIcon, path: "/admin/billing" },
      { name: "Housekeeping", icon: SparklesIcon, path: "/admin/housekeeping" },
      { name: "Maintenance", icon: UserGroupIcon, path: "/admin/maintainance" },
      { name: "Analytics", icon: ChartBarIcon, path: "/admin/analytics" },
      { name: "Settings", icon: FolderIcon, path: "/admin/settings" },
    ],
  },
  {
    title: "STAFF",
    items: [
      { name: "Reservations", icon: ClipboardDocumentListIcon, path: "/staff/reservations" },
      { name: "Check-In/Out", icon: CalendarDaysIcon, path: "/staff/checkinout" },
      { name: "Rooms Status", icon: CubeIcon, path: "/staff/roomstatus" },
      { name: "Maintenance Requests", icon: UserGroupIcon, path: "/staff/maintainancerequest" },
      { name: "Profile", icon: UserCircleIcon, path: "/staff/profile" },
    ],
  },
  {
    title: "GUEST",
    items: [
      { name: "My Bookings", icon: ClipboardDocumentListIcon, path: "/guest/bookings" },
      { name: "Profile", icon: UserCircleIcon, path: "/guest/profile" },
      { name: "Feedback", icon: MegaphoneIcon, path: "/guest/feedback" },
      { name: "Services Request", icon: ChatBubbleLeftEllipsisIcon, path: "/guest/servicerequest" },
    ],
  },
  {
    title: "OTHER",
    items: [
      // { name: "Help Center", icon: QuestionMarkCircleIcon },
      { name: "Logout", icon: UserCircleIcon },
    ],
  },
];

const SideNavbar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white h-screen border-r p-4 flex flex-col overflow-y-auto">
      <div className="text-2xl font-bold text-gray-800 mb-6 px-2">
        LuxuryStay
      </div>

      {menu.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 px-2 mb-2">
            {section.title}
          </h2>
          <ul>
            {section.items.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={i}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-2 py-2 rounded-md text-sm ${
                      isActive
                        ? "bg-gray-200 text-gray-900 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideNavbar;
