import React from 'react';
import './App.css';
import AmountsBTCChart from './AmountsBTCChart';

function App() {
  return (
    <div className="App" style={{ height: "100%"}}>
      <div className="Main">
      <h1 style={{marginLeft: '20px', marginRight: '20px'}}>BTC Addresses Ranges</h1>
      <AmountsBTCChart/>
      <div className="Description">
        <h3>Chart Description</h3>
        <p>This chart displays the amount of addresses that hold different amounts of BTC in the blockchain. </p>
        <p>Last Update: 27th of June 2020</p>
      </div>

      </div>
    </div>
  );
}

export default App;
