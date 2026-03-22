import { motion } from 'framer-motion';
import { useTemperature } from '../context/TemperatureContext';
import UmbrellaManSVG from './illustrations/UmbrellaManSVG';

function getManAnim(condition) {
  const c = (condition || '').toLowerCase();
  if (c.includes('rain') || c.includes('drizzle')) return { rotate: [0, -3, 3, -3, 0], transition: { duration: 2, repeat: Infinity } };
  if (c.includes('thunder') || c.includes('storm')) return { rotate: [0, -6, 6, -6, 0], x: [0, 3, -3, 0], transition: { duration: 1.2, repeat: Infinity } };
  if (c.includes('snow')) return { y: [0, -3, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } };
  if (c.includes('cloud')) return { x: [0, 4, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } };
  return { y: [0, -4, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } };
}

export default function LocationCard({ forecast, weather, loading }) {
  const { convert, label } = useTemperature();

  if (loading) {
    return <div className="flex-1 min-w-[200px] h-[220px] rounded-3xl shimmer" />;
  }

  const tomorrow = forecast?.[0];
  const temp = tomorrow?.temp ?? 20;
  const condition = tomorrow?.description ?? 'Rainy';
  const animProps = getManAnim(condition);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex-1 min-w-[200px] bg-[#C8F0C8] rounded-3xl p-5 relative overflow-hidden shadow-card"
    >
      {/* Label */}
      <p className="text-xs text-text-muted mb-0.5">Tomorrow</p>
      <h3 className="text-xl font-bold text-text-primary">{weather?.city || 'Unknown'}</h3>

      {/* Temp */}
      <p className="text-4xl font-extrabold text-text-primary mt-2">{convert(temp)}{label}</p>
      <p className="text-sm text-text-muted mt-0.5">{condition}</p>

      {/* Illustration Platform */}
      <motion.div
        animate={animProps}
        className="absolute right-0 bottom-0 w-[140px] h-[170px] pointer-events-none flex items-center justify-center pt-8"
        style={{ transformOrigin: 'center bottom' }}
      >
        {/* The "stands" background / Platform */}
        <div className="absolute w-24 h-24 rounded-full bg-white/30 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative">
          <UmbrellaManSVG condition={condition} />
        </div>
      </motion.div>
    </motion.div>
  );
}
