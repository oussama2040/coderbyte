// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>oussama hamzeh </h1>
      <div className="gridcontainer">
        <div style={{ backgroundColor: 'red' }}>Row 1, Column 1</div>
        <div style={{ backgroundColor: 'blue' }}>Row 1, Column 2</div>
        <div style={{ backgroundColor: 'green' }}>Row 2, Column 1</div>
        <div style={{ backgroundColor: 'yellow' }}>Row 2, Column 2</div>
      </div>
      <div className="gridcontainer1">
        <div style={{ backgroundColor: 'purple' }}>Item 1</div>
        <div style={{ backgroundColor: 'orange' }}>Item 2</div>
        <div style={{ backgroundColor: 'pink' }}>Item 3</div>
      </div>
    </div>
  );
}

export default App;
