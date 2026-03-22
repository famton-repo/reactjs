import { useTemperature } from '../context/TemperatureContext';

export default function UnitToggle() {
  const { unit, toggleUnit } = useTemperature();

  return (
    <button
      onClick={toggleUnit}
      className="flex bg-gray-100 rounded-lg p-0.5 text-xs font-semibold"
      title="Toggle temperature unit"
    >
      <span
        className={`px-2 py-1 rounded-md transition-all duration-200 ${
          unit === 'C' ? 'bg-primary text-white shadow-sm' : 'text-text-muted'
        }`}
      >
        °C
      </span>
      <span
        className={`px-2 py-1 rounded-md transition-all duration-200 ${
          unit === 'F' ? 'bg-primary text-white shadow-sm' : 'text-text-muted'
        }`}
      >
        °F
      </span>
    </button>
  );
}
