import { motion } from 'framer-motion';
import { FiX, FiDroplet, FiWind, FiEye, FiThermometer, FiSunrise, FiSunset } from 'react-icons/fi';
import { useTemperature } from '../../context/TemperatureContext';

function formatTime(unix) {
  if (!unix) return '--:--';
  const d = new Date(unix * 1000);
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

export default function WeatherDetailPanel({ onClose, weather, aqi }) {
  const { convert, label } = useTemperature();

  if (!weather) return null;

  const details = [
    { icon: FiThermometer, label: 'Feels Like', value: `${convert(weather.feelsLike)}${label}`, color: 'text-red-400' },
    { icon: FiDroplet, label: 'Humidity', value: `${weather.humidity}%`, color: 'text-blue-400' },
    { icon: FiWind, label: 'Wind Speed', value: `${weather.windSpeed} m/s`, color: 'text-teal-400' },
    { icon: FiEye, label: 'Visibility', value: `${weather.visibility} km`, color: 'text-purple-400' },
    { icon: FiSunrise, label: 'Sunrise', value: formatTime(weather.sunrise), color: 'text-amber-400' },
    { icon: FiSunset, label: 'Sunset', value: formatTime(weather.sunset), color: 'text-orange-400' },
  ];

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
        <h2 className="text-lg font-bold text-text-primary">Current Weather</h2>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <FiX className="text-text-secondary" />
        </button>
      </div>

      {/* City + Temp */}
      <div className="bg-gradient-to-br from-primary to-orange-400 rounded-3xl p-5 mb-5 text-white">
        <p className="text-sm opacity-80">{weather.city}, {weather.country}</p>
        <p className="text-5xl font-extrabold mt-1">{convert(weather.temp)}{label}</p>
        <p className="text-sm mt-1 capitalize opacity-90">{weather.description}</p>
        <p className="text-xs mt-2 opacity-70">Pressure: {weather.pressure} hPa</p>
      </div>

      {/* Detail grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {details.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
          >
            <d.icon className={`text-xl ${d.color} mb-2`} />
            <p className="text-xs text-text-muted">{d.label}</p>
            <p className="text-sm font-bold text-text-primary">{d.value}</p>
          </motion.div>
        ))}
      </div>

      {/* AQI */}
      {aqi && (
        <div className="bg-navy rounded-2xl p-4">
          <p className="text-xs text-text-muted">Air Quality Index</p>
          <p className="text-3xl font-extrabold text-white mt-1">{aqi.value} <span className="text-sm font-normal text-text-muted">AQI</span></p>
          <p className="text-xs text-primary font-semibold mt-1">{aqi.label}</p>
          {aqi.pm25 && <p className="text-xs text-text-muted mt-0.5">PM2.5: {aqi.pm25} µg/m³</p>}
        </div>
      )}
    </motion.div>
  );
}
