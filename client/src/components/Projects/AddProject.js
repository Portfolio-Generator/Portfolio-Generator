
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Card from "react-bootstrap/Card"

import { useMutation } from '@apollo/react-hooks';
import { ADD_PROJECT } from '../../utils/mutations';

//----------------------------------------------------
//  ADD PROJECTS COMPONENT
//----------------------------------------------------
// CREATES a new project and saves to database
// sets prop projectDataSaved(true) to display "saved" message
// and clears it if the user begins typing again
// sets addProjectRequest(false) on save to close form
//----------------------------------------------------
const AddProject = ({
  addProjectRequest,
  setAddProjectRequest,
  projectDataSaved,
  setProjectDataSaved}) => {
  const [projectFormData, setProjectFormData] =
    useState({
      _id: '',
      title: '',
      thumbnail: '',
      repoLink: '',
      deployedLink: '',
      videoLink: '',
      organization: '',
      blurb: '',
      projectSkills: [],
    });

  // Data for resetting form after project is saved
  const [projectFormResetData] =
    useState({
      _id: '',
      title: '',
      thumbnail: '',
      repoLink: '',
      deployedLink: '',
      videoLink: '',
      organization: '',
      blurb: '',
      projectSkills: [],
    });

  const [addProject] = useMutation(ADD_PROJECT);
  //input form validation
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
//----------------------------------------------------
// EVENT HANDLERS
//----------------------------------------------------  
//  Input Change on form
//----------------------------------------------------  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectFormData({ ...projectFormData, [name]: value });
    if (projectDataSaved) setProjectDataSaved(false);
  };
//----------------------------------------------------  
//  Save Project button click
//---------------------------------------------------- 
  const handleSaveProject = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // create project and assign to logged-in user
    try {
      await addProject({
        variables: { ...projectFormData },
      });
      // clear the form data & set "saved message" flag
      setProjectFormData(projectFormResetData);
      setProjectDataSaved(true);
      //NOTE: 
      // Setting AddProjectRequest===false will close
      // the add project form after a save -
      //  BUT current opinion is it's better
      // to leave it open for the next project
      // setAddProjectRequest(false); 

    } catch (e) {
      console.error(e);
    }
  };

  // ---FORM SETUP-------------------------------------------

  const projectField = (description, fieldName, value) => {
    return (<div className="flex-col w-full">
      <label className="raleway-font  font-dark-blue text-xl" >
        <span className="text-left">
          {description}
        </span>
      </label>
      <input
        type="text"
        name={fieldName}
        required onChange={handleInputChange}
        value={value ? value : ''}
        className="form-input px-4 py-3 w-full mt-1">
      </input>
    </div>
    )
  }
  // ----------------------------------------------

  return (
    <section>
      <Form noValidate validated={validated} onSubmit={handleSaveProject}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Error entering project information.
        </Alert>

        <Card.Body className="raleway-font font-dark-blue">
          <div className="pb-4">
          {projectField("Title*", "title", projectFormData.title)}
          </div>
          <div className="pb-4">
          {projectField("Thumbnail Image Filename* (case sensitive)", "thumbnail", projectFormData.thumbnail)}
          </div>
          <div className="pb-4">
          {projectField("Link to deployed application", "deployedLink", projectFormData.deployedLink)}
          </div>
          <div className="pb-4">
          {projectField("Github Repository Link", "repoLink", projectFormData.repoLink)}
          </div>
          <div className="pb-4">
          {projectField("Video Link", "videoLink", projectFormData.videoLink)}
          </div>
          <div className="pb-4">
          {projectField("Organization", "organization", projectFormData.organization)}
          </div>
          {/* Project Blurb:   */}
          <div className="flex-col w-full">
            <label className="raleway-font font-dark-blue text-xl">
              <span className="text-left">Short Description*</span>
            </label>
            <textarea
              type="textarea"
              placeholder='Project Description (required)'
              name='blurb'
              onChange={handleInputChange}
              value={projectFormData.blurb}
              className="form-textarea px-4 py-3 w-full my-3 mb-4 font-dark-blue bd-dark-blue border-2 rounded" rows="6">
            </textarea>
          </div>

          <Button disabled={!(projectFormData.title && projectFormData.thumbnail && projectFormData.blurb)} type='submit' className="btn-primary">
          Save Project
        </Button>

        {projectDataSaved ? (
            <div className="font-sienna text-base "> Project Saved </div>
          ) : null}

        </Card.Body>
      </Form >
    </section >
  );
};

export default AddProject;