import React from 'react';
import { Prov } from './Context/InteractionContext';
import './App.css';

import { ActionButton, ActionType, User, Clicks, Timestamp, CounterButton } from './Consumers';

function App() {
  return (
    <Prov>
      <div className="App">
        <User/>
        <Clicks />
        <Timestamp />
        <ActionType />
        <ActionButton />
        <CounterButton />
      </div>
    </Prov>
  );
}

export default App;
