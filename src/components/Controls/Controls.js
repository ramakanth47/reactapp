// src/components/Controls/Controls.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPlaying,
  setPlayed,
  setMuted,
  setVolume,
  setPlaybackRate,
} from './controlsSlice';

const Controls = () => {
  const dispatch = useDispatch();
  const {
    playing,
    played,
    elapsedTime,
    totalDuration,
    muted,
    playbackRate,
    volume,
  } = useSelector((state) => state.controls);

  const handlePlayPause = () => {
    dispatch(setPlaying(!playing));
  };

  const handleRewind = () => {
    const newPlayed = Math.max(played - 0.1, 0);
    dispatch(setPlayed(newPlayed));
  };

  const handleFastForward = () => {
    const newPlayed = Math.min(played + 0.1, 1);
    dispatch(setPlayed(newPlayed));
  };

  const handleMute = () => {
    dispatch(setMuted(!muted));
  };

  const handleVolumeChange = (event, newValue) => {
    dispatch(setVolume(newValue));
  };

  const handlePlaybackRateChange = (rate) => {
    dispatch(setPlaybackRate(rate));
  };

  return (
    <div className="controls-wrapper">
      <button onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <button onClick={handleRewind}>Rewind</button>
      <button onClick={handleFastForward}>Fast Forward</button>
      <button onClick={handleMute}>
        {muted ? 'Unmute' : 'Mute'}
      </button>

      <div>
        <label htmlFor="volume">Volume:</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => handleVolumeChange(e, parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="playbackRate">Playback Rate:</label>
        <select
          id="playbackRate"
          value={playbackRate}
          onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>

      <div>
        <span>Elapsed Time: {elapsedTime}</span>
        <span>Total Duration: {totalDuration}</span>
      </div>
    </div>
  );
};

export default Controls;
