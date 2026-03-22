import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import AirQualityCard from './components/AirQualityCard';
import TemperatureChart from './components/TemperatureChart';
import LocationCard from './components/LocationCard';
import CityHeader from './components/RightPanel/CityHeader';
import SunArc from './components/RightPanel/SunArc';
import UVICard from './components/RightPanel/UVICard';
import WeatherPrediction from './components/RightPanel/WeatherPrediction';
import SoundManager from './components/SoundManager';
import CalendarPanel from './components/panels/CalendarPanel';
import LocationPanel from './components/panels/LocationPanel';
import WeatherDetailPanel from './components/panels/WeatherDetailPanel';
import { useWeather } from './hooks/useWeather';
import { useSound } from './hooks/useSound';

export default function App() {
  const { weather, aqi, forecast, hourly, loading, searching, error, severeWeather, searchCity } = useWeather();
  const {
    soundEnabled,
    ambientOn,
    tick,
    pop,
    chime,
    focusChime,
    loadChord,
    toggleAmbient,
    toggleSound,
    updateCondition,
  } = useSound();

  const [activePanel, setActivePanel] = useState('dashboard');

  // Play load chord once data is ready
  useEffect(() => {
    if (!loading && weather) {
      const timer = setTimeout(() => loadChord(), 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Update ambient sound when weather condition changes
  useEffect(() => {
    if (weather?.description) {
      updateCondition(weather.description);
    }
  }, [weather?.description, updateCondition]);

  const handlePanelChange = (panel) => {
    setActivePanel(panel);
  };

  const closePanel = () => {
    setActivePanel('dashboard');
  };

  return (
    <div className="flex h-screen bg-page font-jakarta overflow-hidden">
      {/* Sound Manager */}
      <SoundManager
        soundEnabled={soundEnabled}
        ambientOn={ambientOn}
        weatherCondition={weather?.description || ''}
        onToggleSound={toggleSound}
        onToggleAmbient={toggleAmbient}
      />

      {/* Error Toast */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] bg-red-500 text-white text-sm px-4 py-2 rounded-xl shadow-lg"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* COL 1: Sidebar */}
      <Sidebar onIconClick={tick} onPanelChange={handlePanelChange} activePanel={activePanel} />

      {/* Sidebar Panels */}
      <AnimatePresence>
        {activePanel === 'calendar' && (
          <CalendarPanel onClose={closePanel} forecast={forecast} />
        )}
        {activePanel === 'location' && (
          <LocationPanel onClose={closePanel} onSearch={searchCity} searching={searching} />
        )}
        {activePanel === 'weather' && (
          <WeatherDetailPanel onClose={closePanel} weather={weather} aqi={aqi} />
        )}
      </AnimatePresence>

      {/* Click-outside overlay to close panels */}
      {activePanel !== 'dashboard' && activePanel !== 'settings' && activePanel !== 'docs' && (
        <div className="fixed inset-0 z-30" onClick={closePanel} />
      )}

      {/* COL 2: Main Content */}
      <main className="flex-1 ml-[72px] mr-0 lg:mr-[280px] max-md:ml-0 max-md:mb-[64px] overflow-y-auto p-7 max-md:p-4">
        {/* Header */}
        <Header
          onSearchFocus={focusChime}
          onSearch={searchCity}
          searching={searching}
          severeWeather={severeWeather}
        />

        {/* Card Row 1: Weather + Air Quality */}
        <div className="flex gap-5 mb-5 max-sm:flex-col">
          <WeatherCard weather={weather} loading={loading} />
          <AirQualityCard aqi={aqi} loading={loading} onTabSwitch={pop} />
        </div>

        {/* Card Row 2: Temperature Chart + Location */}
        <div className="flex gap-5 max-sm:flex-col">
          <TemperatureChart hourly={hourly} loading={loading} />
          <LocationCard forecast={forecast} weather={weather} loading={loading} />
        </div>
      </main>

      {/* COL 3: Right Panel */}
      <aside className="fixed right-0 top-0 h-screen w-[280px] bg-white p-6 overflow-y-auto shadow-card max-lg:hidden">
        <CityHeader weather={weather} loading={loading} />
        <SunArc weather={weather} />
        <UVICard />
        <WeatherPrediction
          forecast={forecast}
          loading={loading}
          onCtaClick={chime}
        />
      </aside>
    </div>
  );
}
