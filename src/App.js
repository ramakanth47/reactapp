// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import ControlsContainer from './components/Controls/ControlsContainer';
import store from './store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ControlsContainer />
        {/* Other components */}
      </div>
    </Provider>
  );
};

export default App;
