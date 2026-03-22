import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiBell, FiLoader, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import UnitToggle from './UnitToggle';
import { useEffect } from 'react';

// IMPORTANT: Replace this with your actual Google Client ID from Google Cloud Console
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

export default function Header({ onSearchFocus, onSearch, searching, severeWeather }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState('');

  const { user, login, logout } = useAuth();
  const userName = user ? user.name : 'k.kishore';
  const userAvatar = user ? user.picture : null;

  useEffect(() => {
    /* global google */
    if (typeof google !== 'undefined') {
      if (GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com") {
        console.warn("Google Client ID is missing. Authentication will fail.");
      }
      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        { theme: "outline", size: "medium", shape: "pill" }
      );
    }
  }, [user]);

  function handleGoogleResponse(response) {
    // Decode JWT token (simplified for demo)
    try {
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const profile = JSON.parse(jsonPayload);
      login({
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
      });
    } catch (e) {
      console.error("Error decoding Google token", e);
    }
  }

  const handleSearch = () => {
    if (query.trim() && onSearch) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between mb-6 gap-3"
    >
      {/* Left: Avatar + Greeting */}
      <div className="flex items-center gap-3 shrink-0">
        {userAvatar ? (
          <img src={userAvatar} alt={userName} className="w-9 h-9 rounded-full shadow-sm" />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-sm text-text-muted leading-tight">Hello,</p>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-text-primary leading-tight">{userName}</h2>
            {user && (
              <button onClick={logout} className="text-text-muted hover:text-red-500 transition-colors" title="Logout">
                <FiLogOut className="text-sm" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className={`relative w-[280px] max-lg:w-[200px] max-md:hidden transition-all duration-300 ${searchFocused ? 'ring-2 ring-orange-400' : ''} rounded-full`}>
        <input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-white rounded-full py-2.5 pl-5 pr-12 text-sm text-text-primary shadow-sm outline-none placeholder:text-text-muted"
          onFocus={() => {
            setSearchFocused(true);
            onSearchFocus && onSearchFocus();
          }}
          onBlur={() => setSearchFocused(false)}
        />
        <button
          onClick={handleSearch}
          disabled={searching}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-[#E55A2B] transition-colors disabled:opacity-60"
        >
          {searching ? (
            <FiLoader className="text-white text-sm animate-spin" />
          ) : (
            <FiSearch className="text-white text-sm" />
          )}
        </button>
      </div>

      {/* Right: Unit Toggle + Notification Bell */}
      <div className="flex items-center gap-2 shrink-0">
        {!user && <div id="google-login-button"></div>}
        <UnitToggle />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center"
          title={severeWeather ? 'Severe weather alert!' : 'Notifications'}
        >
          <FiBell className="text-text-secondary text-lg" />
          {severeWeather && (
            <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
