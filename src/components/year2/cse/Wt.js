import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../SubjectStyles.css';

const Checklist = ({ items, unit, storageKey, isExpanded, onToggle }) => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const savedState = localStorage.getItem(storageKey);
    return savedState ? JSON.parse(savedState) : {};
  });

  const selectAllRef = useRef(null);

  const allChecked = items.length > 0 && items.every((_, i) => !!checkedItems[i]);
  const someChecked = items.some((_, i) => !!checkedItems[i]) && !allChecked;
  const completedCount = items.filter((_, i) => !!checkedItems[i]).length;

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someChecked;
    }
  }, [someChecked]);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [index]: !prev[index] };
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelectAllChange = (checked) => {
    const updated = {};
    items.forEach((_, i) => {
      updated[i] = checked;
    });
    setCheckedItems(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  return (
    <div className="unit-container">
      <div className="unit-header" onClick={onToggle}>
        <div className="unit-header-content">
          <div className="unit-info">
            <h2 className="unit-title">{unit}</h2>
            <div className="unit-progress">
              <span className="progress-text">{completedCount} of {items.length} completed</span>
              <div className="progress-bar-mini">
                <div 
                  className="progress-fill-mini"
                  style={{ width: `${(completedCount / items.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <div className="unit-controls">
            <div className="completion-indicator">
              <FontAwesomeIcon 
                icon={allChecked ? faCheckCircle : faCircle} 
                className={`completion-icon ${allChecked ? 'completed' : ''}`}
              />
            </div>
            <FontAwesomeIcon 
              icon={isExpanded ? faChevronUp : faChevronDown} 
              className="expand-icon"
            />
          </div>
        </div>
      </div>

      <div className={`unit-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="select-all-container">
          <label className="select-all-label">
            <input
              ref={selectAllRef}
              type="checkbox"
              checked={allChecked}
              onChange={(e) => handleSelectAllChange(e.target.checked)}
              className="select-all-checkbox"
            />
            <span className="checkbox-custom"></span>
            <span className="select-all-text">Select all topics</span>
          </label>
        </div>

        <div className="topics-list">
          {items.map((item, index) => (
            <div key={index} className="topic-item">
              <label className="topic-label">
                <input
                  type="checkbox"
                  checked={!!checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="topic-checkbox"
                />
                <span className="checkbox-custom"></span>
                <span className={`topic-text ${checkedItems[index] ? 'completed' : ''}`}>
                  {item}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WTChecklist = () => {
  const [expandedUnits, setExpandedUnits] = useState({
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false
  });

  const toggleUnit = (unitKey) => {
    setExpandedUnits(prev => ({
      ...prev,
      [unitKey]: !prev[unitKey]
    }));
  };

  const units = [
    {
      key: 'unit1',
      title: 'UNIT 1 - Web Fundamentals & HTML',
      items: [
        'Introduction to Web Technologies',
        'Client-Server Architecture',
        'HTTP Protocol and Methods',
        'HTML Fundamentals',
        'HTML Elements and Attributes', 
        'Forms and Input Elements',
        'HTML5 Semantic Elements',
        'Web Accessibility Basics',
        'HTML Validation',
      ],
      storageKey: 'wt-unit-1-checklist'
    },
    {
      key: 'unit2',
      title: 'UNIT 2 - CSS & Responsive Design',
      items: [
        'CSS Fundamentals',
        'CSS Selectors and Properties',
        'Box Model and Layout',
        'CSS Flexbox',
        'CSS Grid',
        'Responsive Web Design',
        'Media Queries',
        'CSS Frameworks',
        'CSS Preprocessors',
      ],
      storageKey: 'wt-unit-2-checklist'
    },
    {
      key: 'unit3',
      title: 'UNIT 3 - JavaScript & DOM',
      items: [
        'JavaScript Fundamentals',
        'Variables and Data Types',
        'Functions and Scope',
        'DOM Manipulation',
        'Event Handling',
        'Asynchronous JavaScript',
        'AJAX and Fetch API',
        'Local Storage',
        'JavaScript ES6+ Features',
      ],
      storageKey: 'wt-unit-3-checklist'
    },
    {
      key: 'unit4',
      title: 'UNIT 4 - Backend & Modern Frameworks',
      items: [
        'Server-side Programming',
        'Node.js Fundamentals',
        'Express.js Framework',
        'Database Integration',
        'RESTful APIs',
        'Authentication and Authorization',
        'Modern JavaScript Frameworks',
        'React.js Basics',
        'Deployment and Hosting',
      ],
      storageKey: 'wt-unit-4-checklist'
    }
  ];

  return (
    <div className="subject-page">
      <div className="subject-header">
        <h1 className="subject-title">Web Technologies</h1>
        <p className="subject-description">
          Master modern web development with comprehensive coverage of frontend and backend technologies, frameworks, and best practices.
        </p>
      </div>

      <div className="units-container">
        {units.map(unit => (
          <Checklist
            key={unit.key}
            items={unit.items}
            unit={unit.title}
            storageKey={unit.storageKey}
            isExpanded={expandedUnits[unit.key]}
            onToggle={() => toggleUnit(unit.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default WTChecklist;
