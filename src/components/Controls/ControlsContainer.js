// src/components/Controls/ControlsContainer.js
import { connect } from 'react-redux';
import Controls from './Controls';
import {
  setPlaying,
  setPlayed,
  setMuted,
  setVolume,
  setPlaybackRate,
} from './controlsSlice';

const mapStateToProps = (state) => ({
  playing: state.controls.playing,
  played: state.controls.played,
  elapsedTime: state.controls.elapsedTime,
  totalDuration: state.controls.totalDuration,
  muted: state.controls.muted,
  playbackRate: state.controls.playbackRate,
  volume: state.controls.volume,
});

const mapDispatchToProps = {
  setPlaying,
  setPlayed,
  setMuted,
  setVolume,
  setPlaybackRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
