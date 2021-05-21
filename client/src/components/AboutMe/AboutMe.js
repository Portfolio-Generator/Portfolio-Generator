// About Me -
// - accepts parent userState as props
// - accepts input edits to userState
// - on submit, copies userState to userState
//NOTE: DO NOT CHANGE EMAIL HERE -
// - it is our database key for user

import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Form, Button, Alert } from 'react-bootstrap';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import { UPDATE_USER } from '../../utils/mutations';

const AboutMe = ({ userState, setUserState }) => {
  
  
  const devSkillsOptions = [{name:'AJAX',url: "/skills/ajax.svg", selected:true, path:"../../assets/images/skills/ajax.svg"},{name:'Android',url: "/skills/android.svg", selected:true, path:"../../assets/images/skills/android.svg"},{name:'Apollo GraphQL',url: "/skills/apollo-graphql.svg", selected:true, path:"../../assets/images/skills/apollo-graphql.svg"},{name:'AWS',url: "/skills/aws.svg", selected:true, path:"../../assets/images/skills/aws.svg"},{name:'Azure',url: "/skills/azure.svg", selected:true, path:"../../assets/images/skills/azure.svg"},{name:'Bash',url: "/skills/bash.svg", selected:true, path:"../../assets/images/skills/bash.svg"},{name:'Bootstrap',url: "/skills/bootstrap.svg", selected:true, path:"../../assets/images/skills/bootstrap.svg"},{name:'C++',url: "/skills/c++.svg", selected:true, path:"../../assets/images/skills/c++.svg"},{name:'CSS3',url: "/skills/CSS3_logo.svg", selected:true, path:"../../assets/images/skills/CSS3_logo.svg"},{name:'Docker',url: "/skills/docker.svg", selected:true, path:"../../assets/images/skills/docker.svg"},{name:'Express',url: "/skills/express.svg", selected:true, path:"../../assets/images/skills/express.svg"},{name:'Flutter',url: "/skills/flutter.svg", selected:true, path:"../../assets/images/skills/flutter.svg"},{name:'Google Firebase',url: "/skills/googlefirebase.svg", selected:true, path:"../../assets/images/skills/googlefirebase.svg"},{name:'Git',url: "/skills/git-icon.svg", selected:true, path:"../../assets/images/skills/git-icon.svg"},{name:'GitHub',url: "/skills/github.svg", selected:true, path:"../../assets/images/skills/github.svg"},{name:'GitHub API',url: "/skills/github-api.svg", selected:true, path:"../../assets/images/skills/github-api.svg"},{name:'Handlebars',url: "/skills/handlebars.svg", selected:true, path:"../../assets/images/skills/handlebars.svg"},{name:'Heroku',url: "/skills/heroku.svg", selected:true, path:"../../assets/images/skills/heroku.svg"},{name:'HTML5',url: "/skills/html-5.svg", selected:true, path:"../../assets/images/skills/html-5.svg"},{name:'Java',url: "/skills/java.svg", selected:true, path:"../../assets/images/skills/java.svg"},{name:'JavaScript',url: "/skills/javascript.svg", selected:true, path:"../../assets/images/skills/javascript.svg"},{name:'jQuery',url: "/skills/jquery.svg", selected:true, path:"../../assets/images/skills/jquery.svg"},{name:'Linux Tux',url: "/skills/linuxtux.svg", selected:true, path:"../../assets/images/skills/linuxtux.svg"},{name:'Materialize',url: "/skills/materialize.svg", selected:true, path:"../../assets/images/skills/materialize.svg"},{name:'Moment.js',url: "/skills/momentjs.svg", selected:true, path:"../../assets/images/skills/momentjs.svg"},{name:'Mongo DB',url: "/skills/mongodb.svg", selected:true, path:"../../assets/images/skills/mongodb.svg"},{name:'MySQL',url: "/skills/mysql.svg", selected:true, path:"../../assets/images/skills/mysql.svg"},{name:'Node.js',url: "/skills/nodejs.svg", selected:true, path:"../../assets/images/skills/nodejs.svg"},{name:'NPM',url: "/skills/npm.svg", selected:true, path:"../../assets/images/skills/npm.svg"},{name:'PostgreSQL',url: "/skills/postgresql.svg", selected:true, path:"../../assets/images/skills/postgresql.svg"},{name:'RaspberryPi',url: "/skills/raspberrypi.svg", selected:true, path:"../../assets/images/skills/raspberrypi.svg"},{name:'Python',url: "/skills/python.svg", selected:true, path:"../../assets/images/skills/python.svg"},{name:'React',url: "/skills/react.svg", selected:true, path:"../../assets/images/skills/react.svg"},{name:'React Bootstrap',url: "/skills/react-bootstrap.svg", selected:true, path:"../../assets/images/skills/react-bootstrap.svg"},{name:'React Router',url: "/skills/react-router.svg", selected:true, path:"../../assets/images/skills/react-router.svg"},{name:'Redux',url: "/skills/redux.svg", selected:true, path:"../../assets/images/skills/redux.svg"},{name:'Rest API',url: "/skills/REST-API-icon.svg", selected:true, path:"../../assets/images/skills/REST-API-icon.svg"},{name:'Tailwind',url: "/skills/tailwindcss.svg", selected:true, path:"../../assets/images/skills/tailwindcss.svg"},{name:'Typescript',url: "/skills/typescript.svg", selected:true, path:"../../assets/images/skills/typescript.svg"},{name:'Vue.js',url: "/skills/vuejs.svg", selected:true, path:"../../assets/images/skills/vuejs.svg"},{name:'Webpack',url: "/skills/webpack.svg", selected:true, path:"../../assets/images/skills/webpack.svg"}];
  
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

    const [devSkillsChoices, setDevSkillsChoices] = useState([]);
    useEffect(() => {
      setDevSkillsChoices(devSkillsOptions.map(skill => ({...skill,name: skill.name, selected: userState.devSkills.includes(skill.name)})));
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
      const newDevSkillsChoices = [...devSkillsChoices].map((choice, i) => i === index ? {...choice, selected: !choice.selected} : {...choice});
      console.log(newDevSkillsChoices, "newdevSkillsChoices")
      
      setDevSkillsChoices(newDevSkillsChoices);
      const updatedDevSkills = newDevSkillsChoices.filter(choice => choice.selected).map(choice => choice.name);
      setUserState({...userState, devSkills: updatedDevSkills})
    };
    
    // ----------------------------------------------
    // SUBMIT BUTTON event listener
    // -validate form and copy to userState 
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

  const aboutMeField = (description, fieldName, value) => {
    return (<div className="flex-col w-full">
    <label className="raleway-font text-gray-700 text-xl" >
      <span className="text-left">
        {description}
      </span>
    </label>
    <input 
      type = "text"
      name = {fieldName}
      required onChange={handleInputChange} 
      value = {value}
      className="form-input px-4 py-3 rounded-full w-full mt-1">
    </input>
  </div>
    )
  }
  // ----------------------------------------------

  return (
    <section className="bg-green-100 rounded">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Accordion>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Error updating user "About Me" information.
        </Alert>

          {/*  About Bio Form  */}
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="montserrat-font">
              About Bio
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="raleway-font">
              <Card.Body className="raleway-font">
                {aboutMeField("First Name:", "firstname", userState.firstname)}
                {aboutMeField("Last Name:", "lastname", userState.lastname)}
                {aboutMeField("Profile Image Name(case sensitive):", "headshot", userState.headshot)}
                {aboutMeField("Phone Number:", "phone", userState.phone)}
                 {/* About Me Bio:   */}
                <div className="flex-col w-full">
                  <label className="raleway-font text-gray-700 text-xl">
                    <span className="text-left">
                      About Me Bio:
                    </span>
                  </label>
                  <textarea 
                    type="textarea" 
                    placeholder='about me text'
                    name='aboutMe'
                    onChange={handleInputChange} 
                    value={userState.aboutMe}
                      className="form-textarea px-4 py-3 rounded-full w-full mt-1" rows="6">
                  </textarea>
                </div>

              </Card.Body>
            </Accordion.Collapse>

          </Card>

          {/*  Developer Skills List Form  */}
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              className="montserrat-font">
              Developer Skills List Options:
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="raleway-font">
              <Card.Body className="row mt-2">
                {console.log(devSkillsChoices, "devSkillChoices")}
                {devSkillsChoices.map((choice, index) => 
                  <div key={index}>
                  <label>
                    <input type="checkbox" 
                      checked={choice.selected} 
                      onChange={() => updateChoice(index)}/>
                  <span className="text-left">
                    {choice.name} 
                    {console.log("path", choice.url)}

                    <img id="img" src={choice.url}/>
                    </span>
                  </label>
                  </div>
                  // <Form.Check 
                  //   key={index}
                  //   type="switch" 
                  //   id="custom-switch" 
                  //   label={choice.name} 
                  //   checked={choice.selected} 
                  //   onChange={() => updateChoice(index)}
                  // />
                )}

              </Card.Body>
            </Accordion.Collapse>

          </Card>

          <Button disabled={!(userState.firstname && userState.lastname)} type='submit' variant='success'>
            Save
        </Button>

        </Accordion>
      </Form>

    </section>
  );
};

export default AboutMe;