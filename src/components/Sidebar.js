import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faChevronRight, 
  faGraduationCap,
  faMicrochip,
  faCode,
  faDatabase,
  faCalculator,
  faCogs,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedYears, setExpandedYears] = useState({ year2: true });
  const [expandedBranches, setExpandedBranches] = useState({ cse: true });

  const subjects = {
    year2: {
      cse: [
        { 
          id: 'ddco', 
          name: 'Digital Design and Computer Organization',
          shortName: 'DDCO',
          path: '/year2/cse/ddco',
          icon: faCogs
        },
        { 
          id: 'dsa', 
          name: 'Data Structures and Algorithms',
          shortName: 'DSA',
          path: '/year2/cse/dsa',
          icon: faDatabase
        },
        { 
          id: 'mcse', 
          name: 'Mathematics for Computer Science Engineering',
          shortName: 'MCSE',
          path: '/year2/cse/mcse',
          icon: faCalculator
        },
        { 
          id: 'afll', 
          name: 'Automata and Formal Language Logic',
          shortName: 'AFLL',
          path: '/year2/cse/afll',
          icon: faCode
        },
        { 
          id: 'wt', 
          name: 'Web Technologies',
          shortName: 'WT',
          path: '/year2/cse/wt',
          icon: faGlobe
        }
      ]
    }
  };

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const toggleBranch = (branch) => {
    setExpandedBranches(prev => ({
      ...prev,
      [branch]: !prev[branch]
    }));
  };

  const handleSubjectClick = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  const handleHomeClick = () => {
    navigate('/');
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <button 
              className={`sidebar-item home-button ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleHomeClick}
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Dashboard</span>
            </button>
          </div>

          <nav className="sidebar-nav">
            {/* Year 2 */}
            <div className="nav-section">
              <button 
                className="nav-header"
                onClick={() => toggleYear('year2')}
              >
                <FontAwesomeIcon 
                  icon={expandedYears.year2 ? faChevronDown : faChevronRight} 
                  className="chevron-icon"
                />
                <span>Year 2</span>
              </button>

              {expandedYears.year2 && (
                <div className="nav-subsection">
                  {/* CSE Branch */}
                  <button 
                    className="nav-subheader"
                    onClick={() => toggleBranch('cse')}
                  >
                    <FontAwesomeIcon 
                      icon={expandedBranches.cse ? faChevronDown : faChevronRight} 
                      className="chevron-icon"
                    />
                    <FontAwesomeIcon icon={faMicrochip} className="branch-icon" />
                    <span>CSE/AIML</span>
                  </button>

                  {expandedBranches.cse && (
                    <div className="subjects-list">
                      {subjects.year2.cse.map(subject => (
                        <button
                          key={subject.id}
                          className={`subject-item ${location.pathname === subject.path ? 'active' : ''}`}
                          onClick={() => handleSubjectClick(subject.path)}
                          title={subject.name}
                        >
                          <FontAwesomeIcon icon={subject.icon} className="subject-icon" />
                          <span className="subject-name">{subject.shortName}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
