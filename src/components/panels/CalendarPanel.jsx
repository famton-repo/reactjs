import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarPanel({ onClose, forecast }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const today = now.getDate();
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  // Build forecast date lookup
  const forecastDates = {};
  (forecast || []).forEach(f => {
    forecastDates[f.date] = f;
  });

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

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
        <h2 className="text-lg font-bold text-text-primary">Calendar</h2>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <FiX className="text-text-secondary" />
        </button>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <FiChevronLeft className="text-text-secondary" />
        </button>
        <span className="text-sm font-semibold text-text-primary">{MONTHS[month]} {year}</span>
        <button onClick={nextMonth} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <FiChevronRight className="text-text-secondary" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-[10px] font-semibold text-text-muted py-1">{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} />;
          const isToday = isCurrentMonth && day === today;
          const dateStr = `${MONTHS[month]} ${day}`;
          const hasForecast = forecastDates[dateStr];

          return (
            <div
              key={day}
              className={`relative text-center py-2 rounded-xl text-sm cursor-pointer transition-all
                ${isToday ? 'bg-primary text-white font-bold shadow-active-icon' : 'hover:bg-gray-100 text-text-primary'}
              `}
            >
              {day}
              {hasForecast && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px]">
                  {hasForecast.emoji}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Forecast days below */}
      {forecast?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-bold text-text-primary mb-3">Upcoming Forecast</h3>
          {forecast.map((f, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-lg">{f.emoji}</span>
                <div>
                  <p className="text-xs text-text-muted">{f.date}</p>
                  <p className="text-sm font-medium text-text-primary">{f.description}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-text-primary">{f.temp}° / <span className="text-text-muted font-normal">{f.tempMin}°</span></span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
