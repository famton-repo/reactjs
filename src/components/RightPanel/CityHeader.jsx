import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useTemperature } from '../../context/TemperatureContext';

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

export default function CityHeader({ weather, loading }) {
  const { convert, label } = useTemperature();

  if (loading) {
    return <div className="h-[80px] shimmer rounded-2xl mb-4" />;
  }

  const temp = weather?.temp ?? 22;
  const description = weather?.description ?? 'Sun';
  const city = weather?.city ?? 'Banten';
  const country = weather?.country ?? 'ID';

  const conditionLabel = (description || '').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4"
    >
      <h2 className="text-lg font-bold text-text-primary">{conditionLabel}</h2>
      <div className="flex items-center gap-1 text-xs text-text-muted mt-0.5">
        <span>🇮🇩</span>
        <span>{city}, {country === 'ID' ? 'Indonesia' : country}</span>
        <FiChevronDown className="text-xs" />
      </div>
      <p className="text-4xl font-extrabold text-primary mt-1">
        <CountUp end={convert(temp)} />{label}
      </p>
    </motion.div>
  );
}
