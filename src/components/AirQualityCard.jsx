import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiWind } from 'react-icons/fi';

function CountUp({ end, duration = 1200 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return val;
}

const tabs = ['Good', 'Standard', 'Hazardous'];

export default function AirQualityCard({ aqi, loading, onTabSwitch }) {
  const [activeTab, setActiveTab] = useState(1); // Default "Standard"

  useEffect(() => {
    if (aqi) {
      if (aqi.value <= 100) setActiveTab(0);
      else if (aqi.value <= 200) setActiveTab(1);
      else setActiveTab(2);
    }
  }, [aqi]);

  if (loading) {
    return (
      <div className="flex-1 min-w-[300px] h-[240px] rounded-3xl shimmer" />
    );
  }

  const aqiValue = aqi?.value ?? 390;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 min-w-[300px] bg-gradient-to-br from-[#6EC6F5] to-[#A8D8F0] rounded-3xl p-5 relative overflow-hidden shadow-card"
    >
      {/* Top label */}
      <div className="flex items-center gap-2 mb-1">
        <FiWind className="text-white text-sm" />
        <span className="font-bold text-white text-sm">Air Quality</span>
        <span className="text-xs text-white/70 ml-1">More pollution - PM 2.5</span>
      </div>

      {/* Illustration */}
      <div className="absolute right-0 top-0 w-[140px] h-[140px] animate-float pointer-events-none flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-white/20 blur-xl" />
      </div>

      {/* AQI Value */}
      <div className="mt-3">
        <span className="text-5xl font-extrabold text-white">
          <CountUp end={aqiValue} />
        </span>
        <p className="text-xs text-white/70 mt-0.5">AQI</p>
      </div>

      {/* Wind */}
      <p className="text-sm text-white font-medium mt-1">West Wind</p>

      {/* Tabs */}
      <div className="flex bg-white/20 rounded-lg mt-4 p-0.5">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(idx);
              onTabSwitch && onTabSwitch();
            }}
            className={`flex-1 text-xs font-semibold py-1.5 rounded-md transition-all duration-300
              ${activeTab === idx
                ? 'bg-white text-text-primary shadow-sm'
                : 'text-white/80 hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
