import React, { useState } from 'react';
import './UnitDropdown.css';

const UnitDropdown = ({ units, onUnitChange, currentUnit }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="unit-dropdown">
            <button 
                className="unit-dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentUnit || 'Select Unit'} ▼
            </button>
            {isOpen && (
                <div className="unit-dropdown-menu">
                    {units.map((unit, index) => (
                        <button
                            key={index}
                            className="unit-dropdown-item"
                            onClick={() => {
                                onUnitChange(unit);
                                setIsOpen(false);
                            }}
                        >
                            {unit}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UnitDropdown;