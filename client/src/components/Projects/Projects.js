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
  const [deleteId, setDeleteId]=useState('')
  const [removeProject] = useMutation(REMOVE_PROJECT);

  async function handleDeleteProject(event) {
    event.preventDefault();
    console.log('Delete button clicked with Id:', deleteId);
    //  todo *************************************************************
    try { 
      const data = await removeProject({_id: deleteId })
      // const data = await removeProject({_id:pId})

    //  todo *************************************************************
  } catch (err) {
      console.error(err);
    }
  }

  console.log("VICKY userState", userState)

 
  return (
    <div className="flex-row justify-space-between">
      <div className="container" >
        <div>
          <Button onClick={() => setNewProjectRequest(true)} style={{ backgroundColor: 'green' }}>Add New Project</Button>
          {NewProjectRequest ? (
            <div>
              <NewProject />
            </div>
          ) : null}
          {userState.projects.map((proj) => 
          <ul key={proj._id} style={{ listStyle: 'none' }}>
              {/* {setDeleteId(proj._id)} */}
              <li><Button onClick={handleDeleteProject}>Delete Project</Button></li>
                {/* <li><Button onClick={()=>handleDeleteProject}>Delete Project</Button></li> */}
                <li style={{ fontWeight: 'bold' }}>{proj.title}</li>
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