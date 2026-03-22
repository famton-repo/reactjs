import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { FiSun, FiCloud } from 'react-icons/fi';
import { useTemperature } from '../context/TemperatureContext';

const CustomDot = ({ cx, cy, payload }) => {
  return (
    <g>
      <circle cx={cx} cy={cy} r={6} fill="#FF6B35" stroke="white" strokeWidth={3} />
      <text x={cx} y={cy - 18} textAnchor="middle" fontSize={16}>
        {payload.icon}
      </text>
    </g>
  );
};

export default function TemperatureChart({ hourly, loading }) {
  const { convert, label } = useTemperature();

  if (loading) {
    return (
      <div className="flex-[2] min-w-[300px] h-[220px] bg-white rounded-3xl shimmer" />
    );
  }

  const rawData = hourly?.length
    ? hourly
    : [
        { period: 'Morning', temp: 20, icon: '🌅' },
        { period: 'Afternoon', temp: 34, icon: '☀️' },
        { period: 'Evening', temp: 28, icon: '🌥️' },
        { period: 'Night', temp: 22, icon: '🌙' },
      ];

  const data = rawData.map(h => ({
    name: h.period,
    temp: convert(h.temp),
    icon: h.icon,
  }));

  const CustomLabel = ({ x, y, value }) => (
    <text x={x} y={y + 30} textAnchor="middle" fontSize={12} fill="#6B7280" fontWeight={600}>
      {value}°
    </text>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex-[2] min-w-[300px] bg-white rounded-3xl p-5 shadow-card"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-text-primary">How&apos;s the temperature today?</h3>
        <div className="flex gap-1">
          <button className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <FiSun className="text-sm text-primary" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <FiCloud className="text-sm text-text-muted" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[150px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 30, right: 20, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,107,53,0.15)" />
                <stop offset="100%" stopColor="rgba(255,107,53,0)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 500 }}
              dy={10}
            />
            <YAxis hide domain={['dataMin - 5', 'dataMax + 10']} />
            <Tooltip
              contentStyle={{
                background: '#1A1A2E',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '12px',
                padding: '6px 12px',
              }}
              labelStyle={{ color: '#9CA3AF', fontSize: '10px' }}
              formatter={(value) => [`${value}${label}`, 'Temperature']}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#FF6B35"
              strokeWidth={3}
              fill="url(#tempGradient)"
              dot={<CustomDot />}
              label={<CustomLabel />}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
