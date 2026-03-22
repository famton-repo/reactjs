import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function SoundManager({ soundEnabled, ambientOn, weatherCondition, onToggleSound, onToggleAmbient }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 max-md:top-auto max-md:bottom-[80px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onToggleAmbient && onToggleAmbient(weatherCondition)}
        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-all
          ${ambientOn ? 'bg-primary text-white' : 'bg-white text-text-muted hover:text-text-secondary'}`}
        title={ambientOn ? 'Stop ambient sound' : 'Start ambient sound'}
      >
        <motion.span
          key={ambientOn ? 'on' : 'off'}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm"
        >
          {ambientOn ? '🔊' : '🔇'}
        </motion.span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggleSound}
        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-all
          ${soundEnabled ? 'bg-white text-text-secondary' : 'bg-gray-200 text-text-muted'}`}
        title={soundEnabled ? 'Mute UI sounds' : 'Unmute UI sounds'}
      >
        {soundEnabled ? <FiVolume2 className="text-sm" /> : <FiVolumeX className="text-sm" />}
      </motion.button>
    </div>
  );
}
