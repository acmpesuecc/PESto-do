// Header.js (Modified: Play Lofi on the Left)
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="main-header">
            
            {/* 1. LEFT SIDE: Sidebar area content - Play Lofi Button and Logo */}
            <div className="header-left">
                {/* Now holds both PES and Play Lofi to sit above the sidebar */}
                <div className="logo-text">PES</div>
                <button className="play-lofi-btn">Play Lofi</button>
            </div>
            
            {/* 2. CENTER CONTENT: Main content area greeting */}
            <div className="header-center">
                <div className="greeting">
                    <span role="img" aria-label="settings" className="gear-icon">⚙️</span> Good Morning!
                </div>
                <div className="course-prompt">Choose Your Course</div>
            </div>

            {/* 3. RIGHT SIDE: Nothing here, but maintained for structure (was previously PES logo) */}
            <div className="header-right">
                {/* This section can be empty or used for other top-right items */}
            </div>
        </header>
    );
};

export default Header;