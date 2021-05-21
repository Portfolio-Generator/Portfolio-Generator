// Projects - 
// displays the projects when userState updates
// uses projectForm component to add new project 

import React, { useState } from 'react';
import { Button, Accordion } from 'react-bootstrap';

import Card from "react-bootstrap/Card"

import AddProject from './AddProject';

import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PROJECT } from '../../utils/mutations';

const Projects = ({ userState, setuserState }) => {
  const [addProjectRequest, setAddProjectRequest] = useState(false);
  const [removeProject] = useMutation(REMOVE_PROJECT);

  async function handleDeleteProject(deleteId) {
    try {
      await removeProject({ variables: { _id: deleteId } })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section>
   
      <Card.Body className="raleway-font">
        
              <Button onClick={() => setAddProjectRequest(true)} >Add New Project</Button>
              {addProjectRequest ? (
                <div>
                  <AddProject />
                </div>
              ) : null}
              {userState.projects.map((proj) =>
                <ul key={proj._id} style={{ listStyle: 'none' }}>
                  <li><Button onClick={() => handleDeleteProject(proj._id)} >Delete Project</Button></li>
                  <li style={{ fontWeight: 'bold' }}>{proj.title}</li>
                  {proj.thumbnail ? (<li>thumbnail image: {proj.thumbnail}</li>) : null}
                  {proj.deployedLink ? (<li>deployed link: {proj.deployedLink}</li>) : null}
                  {proj.repoLink ? (<li>github repository: {proj.repoLink}</li>) : null}
                  {proj.videoLink ? (<li>video link: {proj.videoLink}</li>) : null}
                  {proj.organization ? (<li>organization: {proj.organization}</li>) : null}
                  {proj.blurb ? (<li>description: {proj.blurb}</li>) : null}
                  {(!proj.projectSkills === []) ? (<li>skills: {proj.projectSkills}</li>) : null}
                </ul>
              )}



            </Card.Body>
         
    </section>
  )
}

export default Projects;