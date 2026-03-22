import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCloud } from 'react-icons/fi';
import { useTemperature } from '../context/TemperatureContext';
import { getWeatherVisuals } from './illustrations/WeatherIllustration';

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

// Condition-based card gradient
function getCardGradient(description, code) {
  const desc = (description || '').toLowerCase();
  const c = code || 0;
  if (c >= 200 && c < 300 || desc.includes('thunder')) return 'from-[#8B9BAE] to-[#6B7A8D]';
  if ((c >= 300 && c < 400) || (c >= 500 && c < 600) || desc.includes('rain') || desc.includes('drizzle')) return 'from-[#C8D8E8] to-[#B0C4D8]';
  if ((c >= 600 && c < 700) || desc.includes('snow')) return 'from-[#E8F4FD] to-[#D0E8F5]';
  if ((c >= 700 && c < 800) || desc.includes('mist') || desc.includes('fog')) return 'from-[#E5E5E5] to-[#D4D4D4]';
  if ((c > 800 && c < 900) || desc.includes('cloud')) return 'from-[#E8EDF2] to-[#D1D9E0]';
  return 'from-[#FFF3C4] to-[#FFE082]';
}

function getAnimClass(description, code) {
  const desc = (description || '').toLowerCase();
  const c = code || 0;
  if (c >= 200 && c < 300 || desc.includes('thunder')) return 'animate-bounce';
  if (desc.includes('rain') || desc.includes('drizzle')) return 'animate-pulse';
  if (desc.includes('snow')) return 'animate-spin-slow';
  return 'animate-float';
}

export default function WeatherCard({ weather, loading }) {
  const { convert, label } = useTemperature();

  if (loading) {
    return <div className="flex-1 min-w-[300px] h-[240px] rounded-3xl shimmer" />;
  }

  const temp = weather?.temp ?? 22;
  const feelsLike = weather?.feelsLike ?? 11;
  const description = weather?.description ?? 'Partly Cloudy';
  const conditionCode = weather?.conditionCode;
  const humidity = weather?.humidity ?? 87;
  const pressure = weather?.pressure ?? 800;
  const visibility = weather?.visibility ?? '4.3';

  const gradient = getCardGradient(description, conditionCode);
  const animClass = getAnimClass(description, conditionCode);
  const isDark = gradient.includes('8B9BAE');
  const textClass = isDark ? 'text-white' : 'text-text-primary';
  const mutedClass = isDark ? 'text-white/60' : 'text-text-muted';
  
  const { Illustration } = getWeatherVisuals(description, conditionCode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex-1 min-w-[300px] bg-gradient-to-br ${gradient} rounded-3xl p-5 relative overflow-hidden shadow-card`}
    >
      {/* Top label */}
      <div className="flex items-center gap-2 mb-1">
        <FiCloud className={`${textClass} text-sm`} />
        <span className={`font-bold ${textClass} text-sm`}>Weather</span>
        <span className={`text-xs ${mutedClass} ml-1`}>What&apos;s the weather.</span>
      </div>

      {/* Illustration Platform */}
      <div className={`absolute right-0 top-0 w-[150px] h-[150px] ${animClass} pointer-events-none flex items-center justify-center`}>
        {/* The "stands" background / Glow */}
        <div className="absolute w-24 h-24 rounded-full bg-white/40 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative transform scale-110">
          <Illustration />
        </div>
      </div>

      {/* Temperature */}
      <div className="mt-4 flex items-baseline gap-2">
        <span className={`text-5xl font-extrabold ${textClass}`}>
          <CountUp end={convert(temp)} />{label}
        </span>
        <span className={`text-lg ${mutedClass} font-medium`}>{convert(feelsLike)}{label}</span>
      </div>

      {/* Condition */}
      <p className={`text-sm ${mutedClass} mt-0.5 capitalize`}>{description}</p>

      {/* Stats pills */}
      <div className="flex gap-2 mt-4 flex-wrap">
        <span className="bg-primary text-white text-[10px] font-semibold rounded-xl px-3 py-1">
          Pressure — {pressure}mb
        </span>
        <span className="bg-primary text-white text-[10px] font-semibold rounded-xl px-3 py-1">
          Visibility — {visibility} km
        </span>
        <span className="bg-primary text-white text-[10px] font-semibold rounded-xl px-3 py-1">
          Humidity — {humidity}%
        </span>
      </div>
    </motion.div>
  );
}
