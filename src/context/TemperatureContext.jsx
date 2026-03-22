import { createContext, useContext, useState, useCallback } from 'react';

const TemperatureContext = createContext();

export function TemperatureProvider({ children }) {
  const [unit, setUnit] = useState('F'); // Default to 'F' to show 100 degrees as requested

  const toggleUnit = useCallback(() => {
    setUnit(prev => (prev === 'C' ? 'F' : 'C'));
  }, []);

  const convert = useCallback((celsius) => {
    if (unit === 'F') return Math.round((celsius * 9) / 5 + 32);
    return celsius;
  }, [unit]);

  const label = unit === 'C' ? '°C' : '°F';

  return (
    <TemperatureContext.Provider value={{ unit, label, toggleUnit, convert }}>
      {children}
    </TemperatureContext.Provider>
  );
}

export function useTemperature() {
  const ctx = useContext(TemperatureContext);
  if (!ctx) throw new Error('useTemperature must be used within TemperatureProvider');
  return ctx;
}
