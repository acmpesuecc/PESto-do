import React, { useState } from 'react';
import { SUBJECTS, ALL_SUBJECTS_ID } from '../config/subjects';

const SubjectDropdown = ({ onSelectSubject }) => {
  const [selectedId, setSelectedId] = useState(ALL_SUBJECTS_ID);

  const handleChange = (e) => {
    const newId = e.target.value;
    setSelectedId(newId);
    // 💡 Pass the selected subject ID to the parent component for filtering
    onSelectSubject(newId);
  };

  return (
    <label>
      Filter by Subject:
      <select value={selectedId} onChange={handleChange}>
        <option value={ALL_SUBJECTS_ID}>All Subjects</option>
        {SUBJECTS.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name} ({subject.id})
          </option>
        ))}
      </select>
    </label>
  );
};

export default SubjectDropdown;