import React from 'react';
import './shop.css';

export default function Shop({title, more, url}) {
    return (
        <div className="shop-section">
            <div className="box">
                <div className="box-content">
                    <h2>{title}</h2>
                    <img src={url} className="box-img" />
                    <p>{more}</p>
                </div>
            </div>
        </div>
    )
}
