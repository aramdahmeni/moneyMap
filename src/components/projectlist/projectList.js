import React, { useState } from 'react';
import './projectList.css';
/*
const projects = [
  {
    name: "Innovo",
    id: "#34",
    status: "Ongoing",
    manager: "Abdellaoui Eya",
    deadline: "29 Oct 2:30pm",
    budget: "30,000 dt",
    startDate: "21/07/2023",
    state: "Ongoing",
    teamMembers: [
      { name: "Dahmeni Aram El Molk", role: "BackEnd developer", salary: "3000" },
      { name: "Attouani Anis", role: "FrontEnd developer", salary: "3000" },
      { name: "Mouelhi Taleb", role: "Designer", salary: "2500" },
    ],
  },
  {
    name: "Momentum",
    id: "#21",
    status: "Ongoing",
    manager: "Hwess Eya",
    deadline: "12 Jan 3:30pm",
    budget: "25,000 dt",
    startDate: "12/01/2023",
    state: "Ongoing",
    teamMembers: [
      { name: "Developer A", role: "BackEnd developer", salary: "2800" },
      { name: "Developer B", role: "FrontEnd developer", salary: "3200" },
    ],
  },
  {
    name: "Saturn",
    id: "#19",
    status: "Ongoing",
    manager: "Anas Ayari",
    deadline: "1 Nov 3:30pm",
    budget: "40,000 dt",
    startDate: "11/05/2022",
    state: "Ongoing",
    teamMembers: [
      { name: "Developer X", role: "BackEnd developer", salary: "3500" },
      { name: "Developer Y", role: "FrontEnd developer", salary: "2900" },
    ],
  },
];

const ProjectDetailsContainer = ({ project }) => {
  const { manager, startDate, deadline, state, teamMembers } = project;

  return (
    <div className="details-container">
      <h2>Details</h2>
      
      <div className="detail-row">
        <label>Project Manager</label>
        <input type="text" value={manager} readOnly />
      </div>
      
      <div className="detail-row">
        <label>Start date</label>
        <input type="text" value={startDate} readOnly />
      </div>
      
      <div className="detail-row">
        <label>Deadline</label>
        <input type="text" value={deadline} readOnly />
      </div>

      <div className="detail-row">
        <label>State</label>
        <select value={state} disabled>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <h3>Team members</h3>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-name">
              <p>{member.name}</p>
              <small>{member.role}</small>
            </div>
            <div className="team-salary">
              <p style={{ color: 'red' }}>{member.salary} dt</p>
            </div>
          </div>
        ))}
      </div>

      <button className="modify-button">Modify</button>
    </div>
  );
};

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="project-list-container">
  
      <div className="project-header-container">
        <div className="project-name">
          <h3>Project’s Name</h3>
          <h1>{selectedProject.name}</h1>
        </div>
        <div className="project-budget">
          <h3>Budget</h3>
          <h1 style={{ color: 'red' }}>{selectedProject.budget}</h1>
        </div>
      </div>

      {<ProjectDetailsContainer project={selectedProject} />}





      <div className="project-list">
        <h2>Upcomming deadlines</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <p>{project.name}</p>
            <small>{project.deadline}</small>
          </div>
        ))}
      </div>

      
    </div>
  );
};




<div className="deadlines-section">
        <Deadlines />
      </div>








<div className="project-list-container">
    <div className="project-list-header">
      <h3>Project List</h3>
      <button className="add-project-btn">+ Add Project</button>
      <select className="filter-status">
        <option value="Ongoing">Ongoing</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
    <table className="project-table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>ID</th>
          <th>Status Indicator</th>
          <th>Project Manager</th>
          <th>Deadline</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{project.name}</td>
            <td>{project.id}</td>
            <td className={`status ${project.status.toLowerCase()}`}>
              {project.status}
            </td>
            <td>{project.manager}</td>
            <td>{project.deadline}</td>
            <td><button className="details-btn">Details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

export default ProjectList;
*/