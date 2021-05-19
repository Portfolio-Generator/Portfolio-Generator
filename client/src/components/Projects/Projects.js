// Projects - 
// displays the projects when userState updates
// uses projectForm component to add new project 

import React, { useState } from 'react';
import NewProject from './NewProject';

const Projects = ({ userState, setuserState }) => {
  const [NewProjectRequest, setNewProjectRequest] = useState(false);


  // useEffect(() => {
  //   if (userData) {
  //     console.log("----")
  //   }
  // }, [userState]);

  console.log("VICKY userState", userState)

 
  return (
    <div className="flex-row justify-space-between">
      <div className="container" >
        <div>
          <button onClick={() => setNewProjectRequest(true)} style={{ backgroundColor: 'green' }}>Add New Project</button>
          {NewProjectRequest ? (
            <div>
              <NewProject />
            </div>
          ) : (<div>null</div>)}
          {userState.projects.map((proj) => 
           
              <ul key={proj._id}>
                <li>{proj.title}</li>
                <li>_id: {proj._id}</li>
                <li>thumbnail: {proj.thumbnail}</li>
                <li>repoLink: {proj.repoLink}</li>
                <li>deployedLink: {proj.deployedLink}</li>
                <li>videoLink: {proj.videoLink}</li>
                <li>organization: {proj.organization}</li>
                <li>description: {proj.blurb}</li>
                <li>project skills: {proj.projectSkills}</li>
              </ul>
            
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;