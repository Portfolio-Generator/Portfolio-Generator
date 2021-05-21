// Creates a new project from data entered in form
// Saves project and updates user in db 

// Version 1.0 is new project only - no editing or updates


import React, { useState } from 'react';
import { Form, Button, Alert, Accordion } from 'react-bootstrap';
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
    console.log("**Saving projectFormData** ", projectFormData)
    
    // create project in database
    // automatically updates logged in user with this project
    try {
      const data = await addProject({
        variables: { ...projectFormData },
      });
      console.log("**returned project** ", data)
    } catch (e) {
      console.error(e);
    }
  };

  // ---FORM SETUP-------------------------------------------

  const projectField = (description, fieldName, value) => {
    return (<div className="flex-col w-full">
      <label className="raleway-font  font-lite-gray text-xl" >
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

        <Card.Body className="raleway-font">
          {projectField("Title (required)", "title", projectFormData.title)}
          {projectField("Thumnail Image File (case sensitive)", projectFormData.thumbnail)}
          {projectField("Link to deployed application:", "deployedLink", projectFormData.deployedLink)}
          {projectField("Github Repository Link (optional)", "repoLink", projectFormData.repoLink)}
          {projectField("Video Link (optional):", "videoLink", projectFormData.videoLink)}
          {projectField("Organization:", "organization", projectFormData.organization)}
          {/* Project Blurb:   */}
          <div className="flex-col w-full">
            <label className="raleway-font font-lite-gray text-xl">
              <span className="text-left">
                Short Description:
                    </span>
            </label>
            <textarea
              type="textarea"
              placeholder='Project Description'
              name='blurb'
              onChange={handleInputChange}
              value={projectFormData.blurb}
              className="form-textarea px-4 py-3 w-full mt-1 border-1" rows="6">
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