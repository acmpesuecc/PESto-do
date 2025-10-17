// Sidebar.js (Modified)
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    // Navigation data - ensuring no duplicate subjects.
    const navigation = {
        'Year 2': {
            'CSE': [
                {
                    name: 'Data Structures and Algorithms',
                    path: '/year2/cse/dsa',
                    units: ['UNIT 1','UNIT 2','UNIT 3','UNIT 4']
                },
                {
                    name: 'Digital Design and Computer Organization',
                    path: '/year2/cse/ddco',
                    units: ['UNIT 1','UNIT 2','UNIT 3','UNIT 4']
                },
                { name: 'Web Technologies', path: '/year2/cse/wt', units: ['UNIT 1','UNIT 2','UNIT 3'] },
                { name: 'AFLL', path: '/year2/cse/afll', units: ['UNIT 1','UNIT 2'] },
                { name: 'MCSE', path: '/year2/cse/mcse', units: ['UNIT 1','UNIT 2','UNIT 3'] },
            ]
        }
    };

    // keep track of expanded subject items
    const [expanded, setExpanded] = useState({});
    const location = useLocation();

    const toggleSubject = (key) => {
        setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <aside className="sidebar">
            {Object.entries(navigation).map(([year, branches]) => (
                <div key={year} className="sidebar-section">
                    <div className="sidebar-year">{year}</div>

                    {Object.entries(branches).map(([branch, subjects]) => (
                        <div key={branch} className="sidebar-branch">
                            <div className="sidebar-branch-name">{branch}</div>
                            <ul className="sidebar-subjects">
                                {subjects.map((subject, idx) => {
                                    const key = `${year}-${branch}-${idx}`;
                                    // Auto-expand the current subject if the path matches the start of the current URL
                                    const isCurrentSubject = location.pathname.startsWith(subject.path);
                                    const isOpen = !!expanded[key] || isCurrentSubject;
                                    
                                    return (
                                        <li key={subject.path} className="subject-item">
                                            <div
                                                className="subject-header"
                                                onClick={() => toggleSubject(key)}
                                                role="button"
                                                aria-expanded={isOpen}
                                            >
                                                <div className="subject-title">{subject.name}</div>
                                                <div style={{ color: isOpen ? 'var(--color-orange-accent)' : 'var(--text-secondary)' }}>
                                                    {isOpen ? '▾' : '▸'}
                                                </div>
                                            </div>

                                            <ul className={`subject-units ${isOpen ? 'show' : ''}`}>
                                                {/* Link to main subject page */}
                                                <li>
                                                    <Link
                                                        to={subject.path}
                                                        className="unit-link"
                                                        style={{ fontWeight: 700, color: location.pathname === subject.path ? 'var(--color-orange-accent)' : undefined }}
                                                    >
                                                        Open Subject
                                                    </Link>
                                                </li>

                                                {/* Units */}
                                                {subject.units && subject.units.map((unit, uidx) => (
                                                    <li key={unit}>
                                                        <Link
                                                            to={`${subject.path}#${unit.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="unit-link"
                                                        >
                                                            {unit}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;