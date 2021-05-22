// Creates a new project from data entered in form
// Saves project and updates user in db 

// Version 1.0 is new project only - no editing or updates


import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PROJECT } from '../../utils/mutations';
import Card from "react-bootstrap/Card"

const AddProject = () => {
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

  // data for reset after save
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


  // ----------------------------------------------
  // UPDATE FORM FIELD Event Listener 
  // ----------------------------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  // ----------------------------------------------
  // SUBMIT BUTTON event listener
  // addProject mutation 
  // add Project to userState Project Array
  // updateUser in database
  // ----------------------------------------------
  const handleSaveProject = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // create project in database
    // automatically updates logged in user with this project
    try {
      await addProject({
        variables: { ...projectFormData },
      });
      // clear the form data
      setProjectFormData(projectFormResetData);
      // console.log("projectformdata after reset: ", projectFormData)



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
        value={value}
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
          {projectField("Title (required)", "title", projectFormData.title)}
          {projectField("Thumbnail Image Filename (case sensitive)", "thumbnail", projectFormData.thumbnail)}
          {projectField("Link to deployed application", "deployedLink", projectFormData.deployedLink)}
          {projectField("Github Repository Link", "repoLink", projectFormData.repoLink)}
          {projectField("Video Link", "videoLink", projectFormData.videoLink)}
          {projectField("Organization", "organization", projectFormData.organization)}
          {/* Project Blurb:   */}
          <div className="flex-col w-full">
            <label className="raleway-font font-dark-blue text-xl">
              <span className="text-left">Short Description</span>
            </label>
            <textarea
              type="textarea"
              placeholder='Project Description'
              name='blurb'
              onChange={handleInputChange}
              value={projectFormData.blurb}
              className="form-textarea px-4 py-3 w-full my-3 mb-4 font-dark-blue bd-dark-blue border-2 rounded" rows="6">
            </textarea>
          </div>

        </Card.Body>


        <Button disabled={!(projectFormData.title)} type='submit' className="btn-primary">
          Save Project
        </Button>




      </Form >
    </section >
  );
};

export default AddProject;