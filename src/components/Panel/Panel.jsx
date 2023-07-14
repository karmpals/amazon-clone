import React from 'react';
import Menu from '@mui/icons-material/Menu';
import './panel.css';
export default function Panel() {
  return (
    <div className="panel">
        <div className="panel-all">
          <Menu className='panel-icon' />
        </div>All
        <div className="panel-ops">
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Registery</p>
          <p>Gift Cards</p>
          <p>Sell</p>
        </div>

        <div className="panel-deals">
          Shop deals in Electronics
        </div>
      </div>
  )
}
