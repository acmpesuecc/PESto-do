// import React, { useState } from 'react';
// import './Afll.css'; // External CSS file for styles
// import Checklist from '../../Checklist';

// const Checklist = ({ items, unit, storageKey }) => {
//     // Load the saved state from localStorage or initialize with default values
//     const [checkedItems, setCheckedItems] = useState(() => {
//         const savedState = localStorage.getItem(storageKey);
//         return savedState ? JSON.parse(savedState) : {};
//     });

//     // Handle checkbox change and update the state
//     const handleCheckboxChange = (index) => {
//         setCheckedItems((prevState) => {
//             const updatedState = {
//                 ...prevState,
//                 [index]: !prevState[index],
//             };

//             // Save the updated state to localStorage
//             localStorage.setItem(storageKey, JSON.stringify(updatedState));
//             return updatedState;
//         });
//     };

//     return (
//         <div className="checklist-container">
//             <h1>{unit}</h1>
//             {items.map((item, index) => (
//                 <div key={index} className="checkbox-item">
//                     <input
//                         type="checkbox"
//                         id={`${unit}-item${index + 1}`}
//                         checked={checkedItems[index] || false}
//                         onChange={() => handleCheckboxChange(index)}
//                     />
//                     <label
//                         htmlFor={`${unit}-item${index + 1}`}
//                         className={checkedItems[index] ? 'checked' : ''}
//                     >
//                         {item}
//                     </label>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const AFLLChecklist = () => {
//     const unit1Items = [
//         'Sets, Functions and Relations',
//         'Basic Notations',
//         'DFA',
//         'NDFA',
//         'Minimization of Finite Automata',
//         'Applications of FSMs',
//         'RegEx',
//         'RegEx in Practice',
//         'Equivalence of Finite Automata and RegEx',
//         'Central Limit Theorem',
//         'Equivalence of Two Regular Expressions',
//         'Regular Grammar',
//         'Equivalence of Regular Grammar and Finite Automata',
//     ];

//     const unit2Items = [
//         'Properties of Regular Languages',
//         'Pumping Lemma',
//         'Linear CFG',
//         'Non-Linear CFG',
//         'Deterministic PDA',
//         'Non-Deterministic PDA',
//     ];

//     const unit3Items = [
//         'Parsing and Ambiguity',
//         'Chomsky Normal Form',
//         'CYK Algorithm',
//         'Greibach Normal Form and CFG to PDA',
//         'Properties of Context-Free Languages',
//         'Pumping Lemma for Context-Free Languages',
//         'Turing Machines',
//     ];

//     const unit4Items = [
//         'PCP, Undecidable Problem, Reduction and UTM',
//         'Propositional Logic',
//         'Propositional Logic - Syntax and Semantics',
//         'Propositional Logic - Simple KB and Inference Procedure',
//         'Inference and Proofs',
//         'CNF by Proofs and Resolution',
//         'First Order Logic - Syntax and Semantics Quantifiers',
//         'Number, Set and Electronic Circuit Domain',
//         'Prolog Programming',
//     ];

//     return (
//         <div>
//             <div className="course-title">Automata Formal Languages and Logic</div>

//             <Checklist
//                 items={unit1Items}
//                 unit="UNIT 1"
//                 storageKey="afll-unit-1-checklist"
//             />
//             <Checklist
//                 items={unit2Items}
//                 unit="UNIT 2"
//                 storageKey="afll-unit-2-checklist"
//             />
//             <Checklist
//                 items={unit3Items}
//                 unit="UNIT 3"
//                 storageKey="afll-unit-3-checklist"
//             />
//             <Checklist
//                 items={unit4Items}
//                 unit="UNIT 4"
//                 storageKey="afll-unit-4-checklist"
//             />
//         </div>
//     );
// };

// export default AFLLChecklist;

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

const AFLLChecklist = () => {
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
      title: 'UNIT 1 - Foundations & Finite Automata',
      items: [
        'Sets, Functions and Relations',
        'Basic Notations',
        'DFA',
        'NDFA',
        'Minimization of Finite Automata',
        'Applications of FSMs',
        'RegEx',
        'RegEx in Practice',
        'Equivalence of Finite Automata and RegEx',
        'Central Limit Theorem',
        'Equivalence of Two Regular Expressions',
        'Regular Grammar',
        'Equivalence of Regular Grammar and Finite Automata',
      ],
      storageKey: 'afll-unit-1-checklist'
    },
    {
      key: 'unit2',
      title: 'UNIT 2 - Regular Languages & Context-Free Grammars',
      items: [
        'Properties of Regular Languages',
        'Pumping Lemma',
        'Linear CFG',
        'Non-Linear CFG',
        'Deterministic PDA',
        'Non-Deterministic PDA',
      ],
      storageKey: 'afll-unit-2-checklist'
    },
    {
      key: 'unit3',
      title: 'UNIT 3 - Parsing & Turing Machines',
      items: [
        'Parsing and Ambiguity',
        'Chomsky Normal Form',
        'CYK Algorithm',
        'Greibach Normal Form and CFG to PDA',
        'Properties of Context-Free Languages',
        'Pumping Lemma for Context-Free Languages',
        'Turing Machines',
      ],
      storageKey: 'afll-unit-3-checklist'
    },
    {
      key: 'unit4',
      title: 'UNIT 4 - Computability & Logic',
      items: [
        'PCP, Undecidable Problem, Reduction and UTM',
        'Propositional Logic',
        'Propositional Logic - Syntax and Semantics',
        'Propositional Logic - Simple KB and Inference Procedure',
        'Inference and Proofs',
        'CNF by Proofs and Resolution',
        'First Order Logic - Syntax and Semantics Quantifiers',
        'Number, Set and Electronic Circuit Domain',
        'Prolog Programming',
      ],
      storageKey: 'afll-unit-4-checklist'
    }
  ];

  return (
    <div className="subject-page">
      <div className="subject-header">
        <h1 className="subject-title">Automata Formal Languages and Logic</h1>
        <p className="subject-description">
          Master the theoretical foundations of computer science through automata theory, formal languages, and logic systems.
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

export default AFLLChecklist;
