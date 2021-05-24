
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card"

import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PROJECT } from '../../utils/mutations';
import AddProject from './AddProject';


//----------------------------------------------------
//  PROJECTS COMPONENT
//----------------------------------------------------
// CREATES a new project (via AddProject) 
// DELETES a saved project
// READS projects that have been saved from
//   userState and displays them
//----------------------------------------------------
  const Projects = ({ userState }) => {
  const [addProjectRequest, setAddProjectRequest] = useState(false);
  const [projectDataSaved, setProjectDataSaved] = useState(false)
  const [removeProject] = useMutation(REMOVE_PROJECT);
    
// on component load, hide the add project form
// doesn't actually work - on hold
    // useEffect(() => {
    //   setAddProjectRequest(false)
    // }, [])

//----------------------------------------------------
// EVENT HANDLERS
//----------------------------------------------------
//  Delete Project button click
//---------------------------------------------------- 
  async function handleDeleteProject(deleteId) {
    try {
      await removeProject({ variables: { _id: deleteId } })
    } catch (err) {
      console.error(err);
    }
  }
//----------------------------------------------------
  return (
    <section>

      <Card.Body className="raleway-font font-dark-blue rounded ">
        <div className="m-2 bg-cream rounded p-1">
          {/* show either the addProject component or the "Add Project" button */}
          {addProjectRequest ? (
            <div>
              <AddProject addProjectRequest={addProjectRequest}
                setAddProjectRequest={setAddProjectRequest}
                projectDataSaved={projectDataSaved}
                setProjectDataSaved={setProjectDataSaved}
              />
            </div>
          ) : <Button onClick={() => setAddProjectRequest(true)} >Add New Project</Button>}
          {/* If we just saved, show a status msg */}
          
      
          <div className="font-dark-blue py-4">
            {userState.projects.map((proj) =>
            <div key={proj._id} className="bg-cream p-3 rounded-2xl my-5 font-dark-gray border-4 bd-dark-green">
            <div key={proj._id}>

              <ul key={proj._id} style={{ listStyle: 'none' }}>
                <li><Button className="bg-sienna mb-4 " onClick={() => handleDeleteProject(proj._id)} >Delete Project</Button></li>
                <li className="font-black text-3xl" style={{ fontWeight: 'bold' }}>{proj.title}</li>
                {proj.thumbnail ? (<li><b className="font-dark-blue">Project Thumbnail Img:</b> {proj.thumbnail}</li>) : null}
                {proj.deployedLink ? (<li><b className="font-dark-blue">Live Site URL:</b> {proj.deployedLink}</li>) : null}
                {proj.repoLink ? (<li><b className="font-dark-blue">Source Code URL:</b> {proj.repoLink}</li>) : null}
                {proj.videoLink ? (<li><b className="font-dark-blue">Video Demo URL:</b> {proj.videoLink}</li>) : null}
                {proj.organization ? (<li><b className="font-dark-blue">Organization:</b> {proj.organization}</li>) : null}
                {proj.blurb ? (<li><b className="font-dark-blue">Project Description:</b> {proj.blurb}</li>) : null}
                {(!proj.projectSkills === []) ? (<li><b className="font-dark-blue">Skills:</b> {proj.projectSkills}</li>) : null}
              </ul>
          </div>
          </div>
            )}
          </div>
        </div>



      </Card.Body>

    </section>
  )
}

export default Projects;