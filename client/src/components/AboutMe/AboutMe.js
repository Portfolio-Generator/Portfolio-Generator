// About Me -
// - accepts parent userState as props
// - accepts input edits to userState
// - on submit, copies userState to userState
//NOTE: DO NOT CHANGE EMAIL HERE -
// - it is our database key for user

import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Form, Button, Alert } from 'react-bootstrap';

import Card from "react-bootstrap/Card"
import { UPDATE_USER } from '../../utils/mutations';

const AboutMe = ({ userState, setUserState }) => {

  const devSkillsOptions = ['AJAX', 'Android', 'Apollo Graph QL', 'AWS', 'Azure', 'Bash', 'Bootstrap',
    'C++', 'CSS3', 'Docker', 'Express', 'Flutter', 'Google Firebase', 'Git', 'GitHub', 'GitHub API',
    'GitHub Pages', 'Handlebars', 'Heroku', 'HTML5', 'Java', 'JavaScript', 'jQuery', 'Linux Tux',
    'Materialize', 'Moment.js', 'Mongo DB', 'MySQL', 'Node.js', 'NPM', 'PostgreSQL', 'Python', 'RasberryPi',
    'React', 'React Bootstrap', 'React Router', 'Redux', 'Rest API', 'Tailwinds CSS', 'Typescript',
    'Vue.js', 'Webpack'];

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

  const [devSkillsChoices, setDevSkillsChoices] = useState([]);
  useEffect(() => {
    setDevSkillsChoices(devSkillsOptions.map(skill => ({ name: skill, selected: userState.devSkills.includes(skill) })));
  }, [userState])

  // ----------------------------------------------
  // UPDATE FORM FIELD Event Listener 
  // ----------------------------------------------
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserState({ ...userState, [name]: value });
  };

  // ----------------------------------------------
  // UPDATE CHECKBOX CHOICES based on index 
  // ----------------------------------------------
  const updateChoice = (index) => {
    const newDevSkillsChoices = [...devSkillsChoices].map((choice, i) => i === index ? { ...choice, selected: !choice.selected } : { ...choice });
    setDevSkillsChoices(newDevSkillsChoices);
    const updatedDevSkills = newDevSkillsChoices.filter(choice => choice.selected).map(choice => choice.name);
    setUserState({ ...userState, devSkills: updatedDevSkills })
  };

  // ----------------------------------------------
  // SUBMIT BUTTON event listener
  // -validate form & save to database 
  // ----------------------------------------------
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log("!!!!!", devSkillsChoices)
    // console.log("#######", updatedDevSkills)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      await updateUser({
        variables: { ...userState },
      });
    } catch (e) {
      console.error(e);
    }

    // setUserState(userState)
    console.log("*******", userState)
  };
  // ----------------------------------------------
  // define the fields for the aboutMe form
  // ----------------------------------------------


  const aboutMeField = (description, fieldName, value) => {
    return (<div className="flex-col w-full">
      <label className="raleway-font text-gray-700 text-xl" >
        <span className="text-left">
          {description}
        </span>
      </label>
      <input
        type="text"
        name={fieldName}
        required onChange={handleInputChange}
        value={value}
        className="form-input px-4 py-3 rounded-full w-full mt-1">
      </input>
    </div>
    )
  }
  // ----------------------------------------------

  return (
    <section className="bg-green-100 rounded">
      <Card.Body className="raleway-font">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Error updating developer information.
          </Alert>

          {/*  Personal Information  */}


          {aboutMeField("First Name:", "firstname", userState.firstname)}
          {aboutMeField("Last Name:", "lastname", userState.lastname)}
          {aboutMeField("Profile Image Filename (case sensitive):", "headshot", userState.headshot)}
          {aboutMeField("Phone Number:", "phone", userState.phone)}
          {/* About Me Bio:   */}
          <div className="flex-col w-full">
            <label className="raleway-font text-gray-700 text-xl">
              <span className="text-left">
                Short Bio:
                    </span>
            </label>
            <textarea
              type="textarea"
              placeholder=''
              name='aboutMe'
              onChange={handleInputChange}
              value={userState.aboutMe}
              className="form-textarea px-4 py-3 rounded-full w-full mt-1" rows="6">
            </textarea>
          </div>

          {/*  Developer Skills  */}

          <div>
            {devSkillsChoices.map((choice, index) =>
              <div key={index}>
                <label>
                  <input type="checkbox"
                    checked={choice.selected}
                    onChange={() => updateChoice(index)} />
                  <span className="text-left">
                    {choice.name}:
                        </span>
                </label>
              </div>
            )}
          </div>
          {/* Save personal info and dev skills to db with one button */}
          <Button disabled={!(userState.firstname && userState.lastname)} type='submit' variant='success'>
            Save
                </Button>
        </Form>
      </Card.Body>
    </section>
  );
};

export default AboutMe;