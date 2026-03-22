import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SunArc({ weather }) {
  const sunrise = weather?.sunrise;
  const sunset = weather?.sunset;

  const [sunPosition, setSunPosition] = useState(0.5);

  // Calculate and auto-update sun position every 60s
  useEffect(() => {
    function calc() {
      if (!sunrise || !sunset) return 0.5;
      const now = Date.now() / 1000;
      const total = sunset - sunrise;
      if (total <= 0) return 0.5;
      const elapsed = now - sunrise;
      return Math.min(Math.max(elapsed / total, 0), 1);
    }

    setSunPosition(calc());
    const interval = setInterval(() => setSunPosition(calc()), 60000);
    return () => clearInterval(interval);
  }, [sunrise, sunset]);

  // Arc parameters
  const width = 220;
  const height = 110;
  const centerX = width / 2;
  const centerY = height - 10;
  const radius = 95;
  const radiusY = 80;

  // Sun position on arc — progress 0 = left (sunrise), 1 = right (sunset), 0.5 = top
  const angle = Math.PI - (sunPosition * Math.PI); // 180° to 0°
  const sunX = centerX + radius * Math.cos(angle);
  const sunY = centerY - radiusY * Math.sin(angle);

  const formatT = (unix) => {
    if (!unix) return '--:--';
    const d = new Date(unix * 1000);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mb-4"
    >
      <svg viewBox={`0 0 ${width} ${height + 10}`} className="w-full">
        {/* Horizon line */}
        <line x1="15" y1={centerY} x2={width - 15} y2={centerY} stroke="#E5E7EB" strokeWidth="1" />

        {/* Arc */}
        <path
          d={`M ${centerX - radius} ${centerY} A ${radius} ${radiusY} 0 0 1 ${centerX + radius} ${centerY}`}
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Sunrise dot (left) */}
        <circle cx={centerX - radius} cy={centerY} r={4} fill="#FF6B35" />

        {/* Sunset dot (right) */}
        <circle cx={centerX + radius} cy={centerY} r={4} fill="#FF6B35" />

        {/* Sun position dot */}
        <circle cx={sunX} cy={sunY} r={8} fill="#FF6B35" />
        <text x={sunX} y={sunY + 4} textAnchor="middle" fontSize={12}>
          ⛅
        </text>

        {/* Labels */}
        <text x={centerX - radius} y={centerY + 18} textAnchor="middle" fontSize={9} fontWeight={600} fill="#1A1A2E">
          Sunrise
        </text>
        <text x={centerX - radius} y={centerY + 28} textAnchor="middle" fontSize={8} fill="#9CA3AF">
          {formatT(sunrise)}
        </text>

        <text x={centerX + radius} y={centerY + 18} textAnchor="middle" fontSize={9} fontWeight={600} fill="#1A1A2E">
          Sunset
        </text>
        <text x={centerX + radius} y={centerY + 28} textAnchor="middle" fontSize={8} fill="#9CA3AF">
          {formatT(sunset)}
        </text>
      </svg>
    </motion.div>
  );
}
