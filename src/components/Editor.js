// Editor.js
import React, { useState, useEffect } from 'react';
import '../App.css';

const Editor = ({ selectedProject, onSaveProject }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedProject) {
      setTitle(selectedProject.title);
      setContent(selectedProject.content);
    }
  }, [selectedProject]);

  const handleSave = () => {
    if (selectedProject) {
      onSaveProject({ ...selectedProject, title, content });
    }
  };

  return (
    <div className='app'>
      {selectedProject && (
        <div>
          <input
            type="text"
            placeholder='ENTER TITTLE'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Editor;
