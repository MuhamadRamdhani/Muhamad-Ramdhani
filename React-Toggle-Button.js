// React Challenge: Toggle Button
// Objective: Modify the component to toggle the button text between "ON" and "OFF" on click.

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
  // Initialize state to true (ON)
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    // Toggle the state to the opposite value
    setIsOn(prevIsOn => !prevIsOn);
  }

  return (
    <button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);
