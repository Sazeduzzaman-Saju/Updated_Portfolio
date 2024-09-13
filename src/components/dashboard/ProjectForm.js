import React, { useState } from "react";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDescription: "",
    projectURL: "",
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    console.log("Project Data Submitted:", projectData);
  };

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Project Description:</label>
          <textarea
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Project URL:</label>
          <input
            type="text"
            name="projectURL"
            value={projectData.projectURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
