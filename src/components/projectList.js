import React from 'react';
import '../App.css';

const ProjectList = ({ projects, onCreateProject, onOpenProject, onDeleteProject }) => {
  return (
    <div>
      <h2>Projects</h2>
      <button onClick={onCreateProject}>Create New Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <span onClick={() => onOpenProject(project)}>{project.title}</span>
            <button onClick={() => onDeleteProject(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
