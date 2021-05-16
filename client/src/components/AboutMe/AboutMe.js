// THIS IS A TEST COMPONENT FOR ABOUT ME INFORMATION
// It is being loaded by the ProjectBilder component

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../../utils/auth';

const AboutMe = ({userState, setUserState}) => {
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
      fontPref:0,
      projects: [],
      socialMedia: []
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
      
      
  console.log("*****", userState.email);
  console.log("!!!!", userFormData);
  const userData = {...userState}
  console.log("&&&&", userData)
  useEffect(()=>{
    if(userData){
      setUserFormData(userData)
    }
  }, [userState])

  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return false;
  }
  
  // EVENT LISTENER: UPDATE FORM FIELD 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // EVENT LISTENER: WRITE THE FORM TO DATABASE 
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
     event.preventDefault();
      event.stopPropagation();
  }

  // try { 
  //   const { data } = await updateUser({
  //     variables: { ...userFormData },
  //   });

  //   console.log(data); // that's the return data now

  // } catch (e) {
  //   console.error(e);
  // }

  // // clear form values
  // setUserFormData({
  //   email: '',
  //   password: '',
  // });
};



  return ( 
    <>
    {/* <Form onSubmit={handleFormSubmit}> */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Error updating user "About Me" information.
        </Alert>
 
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Email: Changes here also change your login email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='firstname'>First name</Form.Label>
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
          <Form.Label htmlFor='lastname'>Last name</Form.Label>
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
            value={userFormData.headshot}
          />
        </Form.Group>

        <Button disabled={!(userFormData.email && userFormData.password)} type='submit' variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AboutMe;