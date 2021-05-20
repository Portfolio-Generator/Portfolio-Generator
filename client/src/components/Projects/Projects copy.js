// Projects - 
// displays the projects when userState updates
// uses projectForm component to add new project 

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import NewProject from './NewProject';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PROJECT } from '../../utils/mutations';

const Projects = ({ userState, setuserState }) => {
  const [NewProjectRequest, setNewProjectRequest] = useState(false);
  const [removeProject] = useMutation(REMOVE_PROJECT);

  async function handleDeleteProject(deleteId) {
    try { 
      const data = await removeProject({variables: { _id: deleteId }})
      // const data = await removeProject({_id:pId})
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex-row justify-space-between">
      <div className="container" >
        <div>
          <Button onClick={() => setNewProjectRequest(true)} >Add New Project</Button>
          {NewProjectRequest ? (
            <div>
              <NewProject />
            </div>
          ) : null}
          {userState.projects.map((proj) => 
            <ul key={proj._id} style={{ listStyle: 'none' }}>
              {console.log(proj)}
              <li><Button onClick={() => handleDeleteProject(proj._id)} >Delete Project</Button></li>
                <li style={{ fontWeight: 'bold' }}>{proj.title}</li>
              {proj.thumbnail ? (<li>thumbnail image: {proj.thumbnail}</li>) : null}
              {proj.repoLink ? (<li>github repository: {proj.repoLink}</li>) : null}
              {proj.videoLink ? (<li>video link: {proj.videoLink}</li>) : null}
              {proj.organization ? (<li>organization: {proj.organization}</li>) : null}
              {proj.blurb ? (<li>description: {proj.blurb}</li>) : null}
              {proj.projectSkills ? (<li>skills: {proj.projectSkills}</li>) : null}            
              </ul>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;