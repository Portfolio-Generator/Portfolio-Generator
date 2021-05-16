// THIS IS A TEST COMPONENT FOR ABOUT ME INFORMATION
// It is being loaded by the ProjectBilder component
// It populates a form with user's personal data and
// lets them update and save
// ACCOUNT DATA: email and password CANNOT be changed here
// because if they were, our update query wouldn't have the same email

import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import { UPDATE_USER } from '../../utils/mutations';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../../utils/auth';

const AboutMe = ({userState, setUserState}) => {

  // vll: local copy of form data populated by query
  const [userFormData, setUserFormData] =
    useState({
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      headshot: 'https://via.placeholder.com/150',
      aboutMe: 'Enter a short, personal bio.'
    });

  // form validation values
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // get saved user data ***************************
  // there should always be at least the basic info
  // first: Query user
  // then: Show "loading" until it's done
  // then: populate default form values
  // then: let user update values
  // last: Click submit and write to database

  // const { loading, data } = useQuery(QUERY_ME);
  // const updateUser = useMutation(UPDATE_USER);
 
// this won't have necessarily have data immediately
// but the component will refresh (?) when it's done loading
// um....right???

  // const userData = data?.me || {};
  
// get token or else we're done
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

// ** Display "loading" until ready

// if (loading) {
//   return <h2>LOADING...</h2>;
// }
// ** Populate form with data from query
// if our syntax feels lucky

setUserFormData({ ...userState });

  return (
    <>
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
