import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiCalendar, FiMapPin, FiCloud, FiSettings, FiFileText } from 'react-icons/fi';

const navItems = [
  { icon: FiGrid, label: 'Dashboard', id: 'dashboard' },
  { icon: FiCalendar, label: 'Calendar', id: 'calendar' },
  { icon: FiMapPin, label: 'Location', id: 'location' },
  { icon: FiCloud, label: 'Weather', id: 'weather' },
];

export default function Sidebar({ onIconClick, onPanelChange, activePanel }) {
  const activeId = activePanel || 'dashboard';

  const handleClick = (id) => {
    // If clicking the already-active panel, close it (go back to dashboard)
    const newPanel = (id === activeId && id !== 'dashboard') ? 'dashboard' : id;
    onPanelChange && onPanelChange(newPanel);
    onIconClick && onIconClick();
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-[72px] bg-white flex flex-col items-center py-5 z-50
                    md:flex md:flex-col
                    max-md:fixed max-md:bottom-0 max-md:top-auto max-md:left-0 max-md:right-0 max-md:h-[64px] max-md:w-full max-md:flex-row max-md:justify-around max-md:py-2 max-md:shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => handleClick('dashboard')}
        className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center mb-8 cursor-pointer max-md:mb-0 max-md:order-first shadow-active-icon"
      >
        <FiCloud className="text-white text-lg" />
      </motion.div>

      {/* Nav Icons */}
      <div className="flex flex-col gap-4 flex-1 max-md:flex-row max-md:gap-2 max-md:flex-initial">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(item.id)}
              title={item.label}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-150 relative group
                ${isActive
                  ? 'bg-primary shadow-active-icon'
                  : 'bg-transparent hover:bg-gray-100'
                }`}
            >
              <item.icon className={`text-lg ${isActive ? 'text-white' : 'text-text-muted group-hover:text-text-secondary'}`} />
              <span className="absolute left-full ml-2 px-2 py-1 bg-navy text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none max-md:hidden">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4 max-md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('settings')}
          title="Settings"
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all relative group
            ${activeId === 'settings' ? 'bg-primary shadow-active-icon' : 'hover:bg-gray-100'}`}
        >
          <FiSettings className={`text-lg ${activeId === 'settings' ? 'text-white' : 'text-text-muted group-hover:text-text-secondary'}`} />
          <span className="absolute left-full ml-2 px-2 py-1 bg-navy text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Settings</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('docs')}
          title="Documents"
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all relative group
            ${activeId === 'docs' ? 'bg-primary shadow-active-icon' : 'hover:bg-gray-100'}`}
        >
          <FiFileText className={`text-lg ${activeId === 'docs' ? 'text-white' : 'text-text-muted group-hover:text-text-secondary'}`} />
          <span className="absolute left-full ml-2 px-2 py-1 bg-navy text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Documents</span>
        </motion.button>
      </div>
    </div>
  );
}
