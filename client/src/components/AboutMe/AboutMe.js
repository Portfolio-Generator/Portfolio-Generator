// About Me -
// - accepts parent userState as props
// - copies userState to userFormData 
// - accepts input edits to userFormData
// - on submit, copies userFormData to userState
//NOTE: DO NOT CHANGE EMAIL HERE -
// - it is our database key for user

// todo: Style form - convert skills to checkboxes/array input


import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AboutMe = ({ userState, setUserState }) => {
  const [userFormData, setUserFormData] =
    useState({
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      headshot: '',
      aboutMe: '',
      devSkills: [],
      colorPref: 0,
      fontPref: 0,
      projects: [],
      socialMedia: []
    });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // ----------------------------------------------
  // ON LOAD, copy userState to userFormData     
  // ----------------------------------------------
  const userData = { ...userState }
  useEffect(() => {
    if (userData) {
      setUserFormData(userData)
    }
  }, [userState])


  // ----------------------------------------------
  // UPDATE FORM FIELD Event Listener 
  // ----------------------------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // ----------------------------------------------
  // SUBMIT BUTTON event listener
  // -validate form and copy to userState 
  // ----------------------------------------------
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("**userFormData**", userFormData)
    setUserState(userFormData)
  };
  // ----------------------------------------------



  return (
    <>
      <p>About Section: Enter your personal information</p>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Error updating user "About Me" information.
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='firstname'>First Name</Form.Label>
          <Form.Control
            type='firstname'
            placeholder='required first name'
            name='firstname'
            onChange={handleInputChange}
            value={userFormData.firstname}
            required
          />
          <Form.Control.Feedback type='invalid'>First name is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lastname'>Last Name</Form.Label>
          <Form.Control
            type='lastname'
            placeholder='required last name'
            name='lastname'
            onChange={handleInputChange}
            value={userFormData.lastname}
            required
          />
          <Form.Control.Feedback type='invalid'>Last name is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='phone'>Phone (optional)</Form.Label>
          <Form.Control
            type='text'
            placeholder='optional phone number'
            name='phone'
            onChange={handleInputChange}
            value={userFormData.phone}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='headshot'>Head Shot File Name (optional)</Form.Label>
          <Form.Control
            type='text'
            placeholder='do not include directory path'
            name='headshot'
            onChange={handleInputChange}
            value={userFormData.headshot}
          />
        </Form.Group>


        <Form.Group>
          <Form.Label htmlFor='aboutMe'>Bio (optional)</Form.Label>
          <Form.Control
            type='text'
            placeholder='A short bio to go with your headshot'
            name='aboutMe'
            onChange={handleInputChange}
            value={userFormData.aboutMe}
          />
        </Form.Group>

        
        <Form.Group>
          <Form.Label htmlFor='devSkills'>List your developer skills (optional)</Form.Label>
          <Form.Control
            type='text'
            placeholder='have to set this up for an array'
            name='devSkills'
            onChange={handleInputChange}
            value={userFormData.devSkills}
          />
        </Form.Group>


        <Button disabled={!(userFormData.firstname && userFormData.lastname)} type='submit' variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AboutMe;