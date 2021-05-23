
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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

      <Card.Body className="raleway-font font-dark-blue rounded ">
        <div className="m-2 bg-cream rounded p-1">

          {addProjectRequest ? (
            <div>
              <AddProject />
            </div>
          ) : <Button onClick={() => setAddProjectRequest(true)} >Add New Project</Button>}
          <div className="font-dark-blue py-4">
            {userState.projects.map((proj) =>
              <ul key={proj._id} style={{ listStyle: 'none' }}>
                <li><Button onClick={() => handleDeleteProject(proj._id)} >Delete Project</Button></li>
                <li style={{ fontWeight: 'bold' }}>{proj.title}</li>
                {proj.thumbnail ? (<li><b>Project Thumbnail Img:</b> {proj.thumbnail}</li>) : null}
                {proj.deployedLink ? (<li><b>Live Site URL:</b> {proj.deployedLink}</li>) : null}
                {proj.repoLink ? (<li><b>Source Code URL:</b> {proj.repoLink}</li>) : null}
                {proj.videoLink ? (<li><b>Video Demo URL:</b> {proj.videoLink}</li>) : null}
                {proj.organization ? (<li><b>Organization:</b> {proj.organization}</li>) : null}
                {proj.blurb ? (<li><b>Project Description:</b> {proj.blurb}</li>) : null}
                {(!proj.projectSkills === []) ? (<li><b>Skills:</b> {proj.projectSkills}</li>) : null}
              </ul>
            )}
          </div>
        </div>



      </Card.Body>

    </section>
  )
}

export default Projects;