import { useCallback, useState, useRef, useEffect } from 'react';
import {
  playTick,
  playWhoosh,
  playPop,
  playChime,
  playFocusChime,
  playLoadChord,
  createAmbientSound,
  stopAmbient,
  isAmbientPlaying,
} from '../utils/audioEngine';

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [ambientOn, setAmbientOn] = useState(false);
  const currentCondition = useRef('');

  const tick = useCallback(() => { if (soundEnabled) playTick(); }, [soundEnabled]);
  const whoosh = useCallback(() => { if (soundEnabled) playWhoosh(); }, [soundEnabled]);
  const pop = useCallback(() => { if (soundEnabled) playPop(); }, [soundEnabled]);
  const chime = useCallback(() => { if (soundEnabled) playChime(); }, [soundEnabled]);
  const focusChime = useCallback(() => { if (soundEnabled) playFocusChime(); }, [soundEnabled]);
  const loadChord = useCallback(() => { if (soundEnabled) playLoadChord(); }, [soundEnabled]);

  // Start/stop ambient with condition awareness
  const startAmbient = useCallback((condition) => {
    currentCondition.current = condition || '';
    createAmbientSound(condition);
    setAmbientOn(true);
  }, []);

  const stopAmbientSound = useCallback(() => {
    stopAmbient();
    setAmbientOn(false);
  }, []);

  const toggleAmbient = useCallback((condition) => {
    if (ambientOn) {
      stopAmbientSound();
    } else {
      startAmbient(condition);
    }
  }, [ambientOn, startAmbient, stopAmbientSound]);

  // When weather condition changes, restart ambient if active
  const updateCondition = useCallback((condition) => {
    if (ambientOn && condition !== currentCondition.current) {
      currentCondition.current = condition;
      stopAmbient();
      setTimeout(() => createAmbientSound(condition), 100);
    }
  }, [ambientOn]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
    if (ambientOn) {
      stopAmbientSound();
    }
  }, [ambientOn, stopAmbientSound]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isAmbientPlaying()) stopAmbient();
    };
  }, []);

  return {
    soundEnabled,
    ambientOn,
    tick,
    whoosh,
    pop,
    chime,
    focusChime,
    loadChord,
    toggleAmbient,
    toggleSound,
    updateCondition,
  };
}
