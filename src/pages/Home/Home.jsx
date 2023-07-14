import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import Panel from '../../components/Panel/Panel';
import Hero from '../../components/Billboard/Hero';
import Shop from '../../components/Shop Section/Shop';
import Footer from '../../components/Footer/Footer';
import data from '../../Data/Data';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Panel />
            <Hero />
            <div className="home">
                {
                    data.map(obj => <Shop
                        title={obj.title}
                        url={obj.url}
                        more={obj.more} />)
                }
            </div>
            <Footer />
        </div>
    )
}
