import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faDatabase,
  faCalculator,
  faCogs,
  faGlobe,
  faArrowRight,
  faCheckCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const subjects = [
    { 
      id: 'ddco', 
      name: 'Digital Design and Computer Organization',
      shortName: 'DDCO',
      path: '/year2/cse/ddco',
      icon: faCogs,
      color: '#ff6b6b',
      description: 'Digital circuits, computer architecture, and organization'
    },
    { 
      id: 'dsa', 
      name: 'Data Structures and Algorithms',
      shortName: 'DSA',
      path: '/year2/cse/dsa',
      icon: faDatabase,
      color: '#4ecdc4',
      description: 'Core data structures, algorithms, and problem-solving techniques'
    },
    { 
      id: 'mcse', 
      name: 'Mathematics for Computer Science Engineering',
      shortName: 'MCSE',
      path: '/year2/cse/mcse',
      icon: faCalculator,
      color: '#45b7d1',
      description: 'Mathematical foundations for computer science'
    },
    { 
      id: 'afll', 
      name: 'Automata and Formal Language Logic',
      shortName: 'AFLL',
      path: '/year2/cse/afll',
      icon: faCode,
      color: '#f9ca24',
      description: 'Formal languages, automata theory, and computational logic'
    },
    { 
      id: 'wt', 
      name: 'Web Technologies',
      shortName: 'WT',
      path: '/year2/cse/wt',
      icon: faGlobe,
      color: '#6c5ce7',
      description: 'Frontend and backend web development technologies'
    }
  ];

  const getProgress = (subjectId) => {
    // This would typically fetch from localStorage or API
    // For now, returning mock data
    const mockProgress = {
      ddco: 65,
      dsa: 40,
      mcse: 80,
      afll: 25,
      wt: 90
    };
    return mockProgress[subjectId] || 0;
  };

  const handleSubjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Your Learning Journey</h1>
        <p>Track your progress across all subjects</p>
      </div>

      <div className="stats-overview">
        <div className="stat-card">
          <FontAwesomeIcon icon={faCheckCircle} className="stat-icon completed" />
          <div className="stat-content">
            <h3>3</h3>
            <p>Subjects Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClock} className="stat-icon in-progress" />
          <div className="stat-content">
            <h3>2</h3>
            <p>In Progress</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faDatabase} className="stat-icon total" />
          <div className="stat-content">
            <h3>5</h3>
            <p>Total Subjects</p>
          </div>
        </div>
      </div>

      <div className="subjects-grid">
        {subjects.map(subject => {
          const progress = getProgress(subject.id);
          return (
            <div 
              key={subject.id} 
              className="subject-card"
              onClick={() => handleSubjectClick(subject.path)}
            >
              <div className="subject-header">
                <div 
                  className="subject-icon-container"
                  style={{ backgroundColor: subject.color }}
                >
                  <FontAwesomeIcon icon={subject.icon} className="subject-icon" />
                </div>
                <div className="subject-title">
                  <h3>{subject.shortName}</h3>
                  <p>{subject.name}</p>
                </div>
              </div>
              
              <p className="subject-description">{subject.description}</p>
              
              <div className="progress-section">
                <div className="progress-header">
                  <span>Progress</span>
                  <span className="progress-percentage">{progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: subject.color 
                    }}
                  />
                </div>
              </div>
              
              <div className="subject-footer">
                <button className="continue-btn">
                  <span>Continue Learning</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
