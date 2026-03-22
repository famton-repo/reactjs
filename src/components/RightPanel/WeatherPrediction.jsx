import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiX } from 'react-icons/fi';
import { useTemperature } from '../../context/TemperatureContext';

export default function WeatherPrediction({ forecast, loading, onCtaClick }) {
  const { convert, label } = useTemperature();
  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return (
      <div>
        <div className="h-4 w-32 shimmer rounded mb-3" />
        <div className="h-12 shimmer rounded-xl mb-2" />
        <div className="h-12 shimmer rounded-xl mb-2" />
      </div>
    );
  }

  const predictions = forecast?.slice(0, 2) ?? [
    { date: 'March 23', emoji: '☁️', description: 'Cloudy', temp: 26, tempMin: 1 },
    { date: 'March 24', emoji: '☀️', description: 'Bright', temp: 26, tempMin: 20 },
  ];

  const allForecast = forecast?.slice(0, 5) ?? predictions;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <h3 className="text-base font-bold text-text-primary mb-3">Weather Prediction</h3>

        {predictions.map((pred, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
            className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
          >
            <div>
              <p className="text-[10px] text-text-muted">{pred.date}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-base">{pred.emoji}</span>
                <span className="text-sm text-text-primary font-medium">{pred.description}</span>
              </div>
            </div>
            <span className="text-sm font-bold text-text-primary">
              {convert(pred.temp)}° / <span className="text-text-muted font-normal">{convert(pred.tempMin)}°</span>
            </span>
          </motion.div>
        ))}

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#E55A2B' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            onCtaClick && onCtaClick();
            setShowModal(true);
          }}
          className="w-full mt-4 bg-primary text-white font-semibold text-sm py-3 rounded-2xl shadow-btn flex items-center justify-center gap-2 animate-pulse-shadow"
        >
          Next 5 Days
          <FiCalendar className="text-sm" />
          <span className="text-xs">→</span>
        </motion.button>
      </motion.div>

      {/* 5-Day Forecast Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 w-full max-w-md shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-primary">5-Day Forecast</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FiX className="text-text-secondary" />
                </button>
              </div>

              <div className="space-y-1">
                {allForecast.map((pred, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{pred.emoji}</span>
                      <div>
                        <p className="text-xs text-text-muted">{pred.date}</p>
                        <p className="text-sm text-text-primary font-medium">{pred.description}</p>
                      </div>
                    </div>
                    <span className="text-base font-bold text-text-primary">
                      {convert(pred.temp)}° / <span className="text-text-muted font-normal">{convert(pred.tempMin)}°</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
