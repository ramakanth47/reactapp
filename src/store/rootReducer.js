// src/store/rootReducer.js
import { combineReducers } from 'redux';
import controlsReducer from '../components/Controls/controlsSlice';

const rootReducer = combineReducers({
  controls: controlsReducer,
  // Add more reducers as needed
});

export default rootReducer;
