import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faMugHot, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Afll from './components/year2/cse/Afll.js';
import Ddco from './components/year2/cse/Ddco.js';
import Dsa from './components/year2/cse/Dsa.js';
import Mcse from './components/year2/cse/Mcse.js';
import Wt from './components/year2/cse/Wt.js';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function AppContent() {
    const [greeting, setGreeting] = useState('');
    const [icon, setIcon] = useState(null);
    const [isLofiPlaying, setLofiPlaying] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const date = new Date();
        const currentTime = date.getHours();

        if (currentTime >= 3 && currentTime < 12) {
            setGreeting('Good Morning!');
            setIcon(faSun);
        } else if (currentTime >= 12 && currentTime < 16) {
            setGreeting('Good Afternoon!');
            setIcon(faSun);
        } else if (currentTime >= 16 && currentTime < 21) {
            setGreeting('Good Evening!');
            setIcon(faMugHot);
        } else {
            setGreeting('Good Evening!');
            setIcon(faMoon);
        }
    }, []);

    const toggleLofi = () => {
        setLofiPlaying(!isLofiPlaying);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const isHomePage = location.pathname === '/';

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="header-left">
                    <button className="sidebar-toggle" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
                    </button>
                    <div className="logo">
                        <h1><span className='PES'>PES</span><span className='to'>to</span></h1>
                    </div>
                </div>
                <div className="header-right">
                    <button className="lofi-button" onClick={toggleLofi}>
                        {isLofiPlaying ? 'Pause Lofi' : 'Play Lofi'}
                    </button>
                </div>
            </header>

            <div className="app-layout">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                    {isHomePage && (
                        <div className="greeting-container">
                            <h1 className="greeting-heading">
                                <FontAwesomeIcon icon={icon} /> {greeting}
                            </h1>
                            <p className="greeting-subtitle">Ready to tackle your studies?</p>
                        </div>
                    )}
                    
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/year2/cse/ddco" element={<Ddco />} />
                        <Route path="/year2/cse/dsa" element={<Dsa />} />
                        <Route path="/year2/cse/mcse" element={<Mcse />} />
                        <Route path="/year2/cse/afll" element={<Afll />} />
                        <Route path="/year2/cse/wt" element={<Wt />} />
                    </Routes>
                </main>
            </div>

            {isLofiPlaying && (
                <audio autoPlay loop>
                    <source src="https://ec3.yesstreaming.net:3755/stream" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
