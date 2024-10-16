import React from 'react';
import './projectList.css';
import { Link, useNavigate } from 'react-router-dom';

const projects = [
  {
    name: "Innovo",
    id: "#34",
    status: "Ongoing",
    manager: "Abdellaoui Eya",
    deadline: "29 Oct 2:30pm",
  },
  {
    name: "Momentum",
    id: "#21",
    status: "Ongoing",
    manager: "Hwess Eya",
    deadline: "12 Jan 3:30pm",
  },
  {
    name: "Saturn",
    id: "#19",
    status: "Ongoing",
    manager: "Anas Ayari",
    deadline: "1 Nov 3:30pm",
  },
];

const ProjectList = () => {
  const navigate = useNavigate(); // Correct usage of useNavigate hook

  const handleAddProjectClick = () => {
    navigate('/addproject'); // Correct way to programmatically navigate
  };

  return (
    <div className="project-list-container">
      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-card">
          <h3>All Projects</h3>
          <h2>21</h2>
        </div>
        <div className="stats-card">
          <h3>Ongoing Projects</h3>
          <h2>7</h2>
        </div>
        <div className="stats-card">
          <h3>Completed Projects</h3>
          <h2>12</h2>
        </div>
      </div>

      {/* Project Table */}
      <div className='projectList'>
        <div className="list-header">
          <h3>Project List</h3>
        </div>
        <div className="list-buttons">
          <button className="add-list-btn" onClick={handleAddProjectClick}>
            Add project
          </button>
        </div>
      </div>

      <div className="project-table">
        <div className="table-header">
          <p>Project Name</p>
          <p>ID</p>
          <p>Status Indicator</p>
          <p>Project Manager</p>
          <p>Deadline</p>
          <p>Details</p>
        </div>
        {projects.map((project, index) => (
          <div key={index} className="table-row">
            <p>{project.name}</p>
            <p>{project.id}</p>
            <p className={project.status === 'Ongoing' ? 'status ongoing' : 'status'}>{project.status}</p>
            <p>{project.manager}</p>
            <p>{project.deadline}</p>
            <Link to={`/project`}>
              <button className="details-button">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
