import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiSearch, FiMapPin, FiLoader } from 'react-icons/fi';

const POPULAR_CITIES = [
  'Tokyo, JP', 'London, GB', 'New York, US', 'Paris, FR',
  'Mumbai, IN', 'Sydney, AU', 'Dubai, AE', 'Singapore, SG',
  'Berlin, DE', 'Toronto, CA', 'São Paulo, BR', 'Banten, ID',
];

export default function LocationPanel({ onClose, onSearch, searching }) {
  const [query, setQuery] = useState('');

  const handleSearch = (q) => {
    const searchTerm = q || query;
    if (searchTerm.trim() && onSearch) {
      onSearch(searchTerm.trim());
      setQuery('');
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="fixed left-[72px] top-0 h-screen w-[340px] bg-white/80 backdrop-blur-xl border-r border-gray-200 z-40 p-6 overflow-y-auto shadow-xl max-md:left-0 max-md:w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-text-primary">Search Location</h2>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <FiX className="text-text-secondary" />
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search city name..."
          className="w-full bg-white rounded-2xl py-3 pl-4 pr-12 text-sm text-text-primary shadow-sm outline-none border border-gray-200 focus:ring-2 focus:ring-primary/40 transition-all"
          autoFocus
        />
        <button
          onClick={() => handleSearch()}
          disabled={searching}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-xl flex items-center justify-center hover:bg-[#E55A2B] transition-colors"
        >
          {searching ? <FiLoader className="text-white text-sm animate-spin" /> : <FiSearch className="text-white text-sm" />}
        </button>
      </div>

      {/* Popular cities */}
      <h3 className="text-sm font-bold text-text-primary mb-3">Popular Cities</h3>
      <div className="grid grid-cols-2 gap-2">
        {POPULAR_CITIES.map((city) => (
          <motion.button
            key={city}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSearch(city)}
            className="flex items-center gap-2 p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-left border border-gray-100"
          >
            <FiMapPin className="text-primary text-sm shrink-0" />
            <span className="text-xs font-medium text-text-primary truncate">{city}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
