import { useMemo } from 'react';
import sunClouds from '../../assets/sun_clouds-removebg-preview.png';

/* ─── Inline SVG illustrations keyed by OWM condition code group ─── */

function SunSVG() {
  return (
    <div className="w-[130px] h-[130px] flex items-center justify-center">
      <img 
        src={sunClouds} 
        alt="Sunny" 
        className="w-full h-full object-contain animate-float-slow" 
      />
    </div>
  );
}

function CloudySVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes drift1 { 0%,100% { transform: translateX(0); } 50% { transform: translateX(12px); } }
        @keyframes drift2 { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-10px); } }
        .cloud1 { animation: drift1 8s ease-in-out infinite; }
        .cloud2 { animation: drift2 6s ease-in-out infinite; }
      `}</style>
      <g className="cloud1">
        <ellipse cx="50" cy="55" rx="32" ry="16" fill="#D1D5DB" />
        <ellipse cx="38" cy="47" rx="20" ry="14" fill="#E5E7EB" />
        <ellipse cx="62" cy="45" rx="22" ry="15" fill="#E5E7EB" />
      </g>
      <g className="cloud2">
        <ellipse cx="80" cy="80" rx="28" ry="13" fill="#D1D5DB" />
        <ellipse cx="70" cy="73" rx="18" ry="11" fill="#E5E7EB" />
        <ellipse cx="90" cy="74" rx="16" ry="10" fill="#E5E7EB" />
      </g>
      {/* tiny sun peeking */}
      <circle cx="100" cy="30" r="14" fill="#FFD93D" opacity="0.6" />
    </svg>
  );
}

function RainSVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes fall { 0% { transform: translateY(-10px); opacity:1; } 100% { transform: translateY(40px); opacity:0; } }
        .drop { animation: fall 1.2s linear infinite; }
      `}</style>
      {/* cloud */}
      <ellipse cx="65" cy="40" rx="36" ry="18" fill="#94A3B8" />
      <ellipse cx="50" cy="32" rx="22" ry="15" fill="#B0BEC5" />
      <ellipse cx="80" cy="30" rx="24" ry="16" fill="#B0BEC5" />
      {/* rain drops */}
      {[30, 45, 60, 75, 90, 38, 52, 68, 82].map((x, i) => (
        <line
          key={i}
          className="drop"
          x1={x} y1={58} x2={x - 3} y2={72}
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}

function ThunderstormSVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes flash { 0%,100% { opacity:0; } 10% { opacity:1; } 20% { opacity:0; } }
        @keyframes hfall { 0% { transform: translateY(-10px); opacity:1; } 100% { transform: translateY(45px); opacity:0; } }
        .bolt { animation: flash 5s ease-in-out infinite; }
        .hdrop { animation: hfall 0.8s linear infinite; }
      `}</style>
      <ellipse cx="65" cy="35" rx="40" ry="20" fill="#64748B" />
      <ellipse cx="48" cy="26" rx="24" ry="16" fill="#78909C" />
      <ellipse cx="82" cy="24" rx="26" ry="17" fill="#78909C" />
      {/* lightning */}
      <polygon className="bolt" points="65,42 55,65 62,65 52,90 75,58 66,58 74,42" fill="#FBBF24" style={{ animationDelay: '0s' }} />
      <polygon className="bolt" points="85,45 78,62 83,62 76,80 93,56 86,56 92,45" fill="#FBBF24" opacity="0.6" style={{ animationDelay: '2.5s' }} />
      {/* rain */}
      {[30, 42, 55, 70, 82, 95, 36, 48, 62, 76, 88, 38, 58, 74, 90].map((x, i) => (
        <line
          key={i}
          className="hdrop"
          x1={x} y1={55} x2={x - 4} y2={68}
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </svg>
  );
}

function SnowSVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes snowfall { 0% { transform: translateY(-10px) rotate(0deg); opacity:1; } 100% { transform: translateY(50px) rotate(180deg); opacity:0; } }
        @keyframes sway { 0%,100% { transform: translateX(0); } 50% { transform: translateX(8px); } }
        .flake { animation: snowfall 3s linear infinite, sway 2s ease-in-out infinite; }
      `}</style>
      <ellipse cx="65" cy="35" rx="36" ry="18" fill="#CBD5E1" />
      <ellipse cx="50" cy="27" rx="22" ry="14" fill="#E2E8F0" />
      <ellipse cx="80" cy="25" rx="24" ry="15" fill="#E2E8F0" />
      {[35, 50, 65, 80, 95, 42, 72].map((x, i) => (
        <text
          key={i}
          className="flake"
          x={x}
          y={55}
          fontSize="12"
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          ❄
        </text>
      ))}
    </svg>
  );
}

function MistSVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes fogdrift1 { 0%,100% { transform: translateX(0); } 50% { transform: translateX(20px); } }
        @keyframes fogdrift2 { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-15px); } }
        @keyframes fogdrift3 { 0%,100% { transform: translateX(0); } 50% { transform: translateX(10px); } }
        .fog1 { animation: fogdrift1 8s ease-in-out infinite; }
        .fog2 { animation: fogdrift2 6s ease-in-out infinite; }
        .fog3 { animation: fogdrift3 10s ease-in-out infinite; }
      `}</style>
      <rect className="fog1" x="10" y="35" width="100" height="8" rx="4" fill="#D1D5DB" opacity="0.5" />
      <rect className="fog2" x="20" y="55" width="90" height="8" rx="4" fill="#D1D5DB" opacity="0.4" />
      <rect className="fog3" x="5" y="75" width="110" height="8" rx="4" fill="#D1D5DB" opacity="0.35" />
      <rect className="fog1" x="30" y="95" width="70" height="6" rx="3" fill="#D1D5DB" opacity="0.3" />
    </svg>
  );
}

/**
 * Returns the right SVG illustration and card gradient based on OWM weather condition.
 * @param {string} description — e.g. "clear sky", "light rain", "thunderstorm"
 * @param {number|undefined} conditionCode — OWM condition id (200-800+)
 */
export function getWeatherVisuals(description, conditionCode) {
  const desc = (description || '').toLowerCase();
  const code = conditionCode || 0;

  // Thunderstorm 2xx
  if (code >= 200 && code < 300 || desc.includes('thunder')) {
    return { Illustration: ThunderstormSVG, gradient: 'from-[#8B9BAE] to-[#6B7A8D]', textClass: 'text-white' };
  }
  // Drizzle 3xx / Rain 5xx
  if ((code >= 300 && code < 400) || (code >= 500 && code < 600) || desc.includes('rain') || desc.includes('drizzle')) {
    return { Illustration: RainSVG, gradient: 'from-[#C8D8E8] to-[#B0C4D8]', textClass: 'text-text-primary' };
  }
  // Snow 6xx
  if ((code >= 600 && code < 700) || desc.includes('snow')) {
    return { Illustration: SnowSVG, gradient: 'from-[#E8F4FD] to-[#D0E8F5]', textClass: 'text-text-primary' };
  }
  // Atmosphere/Mist/Fog 7xx
  if ((code >= 700 && code < 800) || desc.includes('mist') || desc.includes('fog') || desc.includes('haze')) {
    return { Illustration: MistSVG, gradient: 'from-[#E5E5E5] to-[#D4D4D4]', textClass: 'text-text-primary' };
  }
  // Clouds 80x
  if ((code > 800 && code < 900) || desc.includes('cloud') || desc.includes('overcast')) {
    return { Illustration: CloudySVG, gradient: 'from-[#E8EDF2] to-[#D1D9E0]', textClass: 'text-text-primary' };
  }
  // Clear 800 / default sunny
  return { Illustration: SunSVG, gradient: 'from-[#FFF3C4] to-[#FFE082]', textClass: 'text-text-primary' };
}

export { SunSVG, CloudySVG, RainSVG, ThunderstormSVG, SnowSVG, MistSVG };
