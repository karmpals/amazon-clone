import './footer.css';
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="foot-panel">
                <p>Back to top</p>
            </div>
            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <a >Careers</a>
                    <a >Blog</a>
                    <a >About Amazon</a>
                    <a >Investor Relation</a>
                    <a >Amazon Devices</a>
                    <a >Amazon Services</a>
                </ul>
                <ul>
                    <p>Make Money with Us</p>
                    <a >Sell products on Amazon</a>
                    <a >Sell on Amazon Business</a>
                    <a >Sell apps on Amazon</a>
                    <a >Become an Affiliate</a>
                    <a >Advertise Your Products</a>
                    <a >Self-Publish with Us</a>
                    <a >Host an Amazon Hub</a>
                </ul>
                <ul>
                    <p>Amazon Payment Products</p>
                    <a >Amazon Business Card</a>
                    <a >Shop with Points</a>
                    <a >Reload Your Balance</a>
                    <a >Amazon Currency Converter</a>
                </ul>
                <ul>
                    <p>Let Us Help You</p>
                    <a >Amazon and COVID-19</a>
                    <a >Your Account</a>
                    <a >Your Orders</a>
                    <a >Shopping Rates & Policies</a>
                    <a >Return & Replacement</a>
                    <a >Manage Your Content and Devices</a>
                    <a >Amazon Assistant</a>
                    <a >Help</a>
                </ul>
            </div>
            <div className="foot-panel3">
                <div className="logo"></div>
            </div>
            <div className="foot-panel4">
                <div className="pages">
                    <a >Conditions of Use</a>
                    <a >Privacy Notice</a>
                    <a >Your Ads Privacy Choices</a>
                </div>
                <div className="copyright">
                    &copy; 1996-2023, Amazon.com, Inc. or Its affiliate
                </div>
            </div>
        </div>
    )
}
