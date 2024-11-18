/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sidebarItems } from "./SidebarContent";

export default function DashboardComponent() {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle sidebar item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex flex-col w-64 bg-white shadow-lg"
      >
        <SidebarContent
          selectedItem={selectedItem}
          setSelectedItem={handleItemClick}
        />
      </motion.aside>

      {/* Mobile menu button */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div
            className="absolute inset-0 bg-gray-600 opacity-75"
            onClick={toggleMobileMenu}
          ></div>
          <nav className="relative flex flex-col w-64 h-full bg-white shadow-lg">
            <SidebarContent
              selectedItem={selectedItem}
              setSelectedItem={handleItemClick}
            />
          </nav>
        </motion.div>
      )}

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          key={selectedItem.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          {selectedItem.element}
        </motion.div>
      </main>
    </div>
  );
}

function SidebarContent({ selectedItem, setSelectedItem }) {
  return (
    <>
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-3 space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setSelectedItem(item)}
                className={`flex items-center w-full px-4 py-2 text-sm rounded-md transition-colors duration-150 ${
                  selectedItem.label === item.label
                    ? "bg-[#FFB5B5] text-white"
                    : "text-gray-600 hover:bg-[#FFF5F5] hover:text-[#FFB5B5]"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">© 2023 Dental Clinic Admin</p>
      </div>
    </>
  );
}
