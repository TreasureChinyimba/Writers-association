import React, { useState, useEffect } from 'react';
import ProjectList from './components/projectList';
import Editor from './components/Editor';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Fetch projects from local storage on component mount
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  useEffect(() => {
    // Save projects to local storage whenever projects state changes
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleCreateProject = () => {
    const newProject = {
      id: new Date().getTime(),
      title: '',
      content: '',
    };

    setProjects([...projects, newProject]);
    setSelectedProject(newProject);
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleSaveProject = (updatedProject) => {
    const updatedProjects = projects.map((p) =>
      p.id === updatedProject.id ? updatedProject : p
    );

    setProjects(updatedProjects);
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    setProjects(updatedProjects);
    setSelectedProject(null);
  };

  return (
    <div>
      <h1>Lyrics Writing App</h1>
      <ProjectList
        projects={projects}
        onCreateProject={handleCreateProject}
        onOpenProject={handleOpenProject}
        onDeleteProject={handleDeleteProject}
      />
      <Editor
        selectedProject={selectedProject}
        onSaveProject={handleSaveProject}
      />
    </div>
  );
};

export default App;
