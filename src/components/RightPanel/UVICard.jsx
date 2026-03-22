import { motion } from 'framer-motion';
import { FiSun } from 'react-icons/fi';

export default function UVICard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-navy rounded-2xl p-4 mb-4"
    >
      <div className="flex items-center gap-3">
        <FiSun className="text-2xl text-amber-400" />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">20 UVI</span>
            <span className="bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-lg">
              Moderate
            </span>
          </div>
          <p className="text-xs text-text-muted mt-0.5">Moderate risk of risk from UV rays</p>
        </div>
      </div>
    </motion.div>
  );
}
