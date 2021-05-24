import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import { Accordion, Card } from "react-bootstrap";
// import Card from "react-bootstrap/Card"
import Directions from "../Directions/Directions"


import Auth from '../../utils/auth';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import SocialMedia from '../SocialMedia/SocialMedia';
import DetailedDirections from '../Directions/DetailedDirections';

import PortfolioBuildButton from '../PortfolioBuildButton/PortfolioBuildButton';
import './PortfolioBuilder.css'



const PortfolioBuilder = () => {
  // Define State for  User and portfolio
  const [userState, setUserState] = useState({
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
  //-------------------------------------------
  // TBD: accordion toggle state & event listener
  // const [accordionState, setAccordionState] = useState('0');
  //  This click handler is meant to catch changes to the accordion key so
  // we can put + or - buttons on the header. Howerver, it's not working
  // - the first time in key is "n" and state is "n+1"
  // - commenting it out for future development
  // function handleOnClickAccordion(key) {
  //   console.log ('onClick key: ', key, 'accordionState: ', accordionState)
  // };
  // With this in the accordion toggle:
  // onClick={() => {
  //   setAccordionState('1')
  //   handleOnClickAccordion('1')
  // }}
  //-------------------------------------------


  let { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  useEffect(() => {
    if (data) {
      setUserState(data.me)
    }
  }, [data])

  const loggedIn = Auth.loggedIn();
  if (!loggedIn) {
    return (
      <div className="flex-row justify-space-between">
        <div className="container">
          Please log in to use PortfolioBuilder
        </div>
      </div>
    )
  }
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <main className="bg-cyann ">
      <Directions />
      <div className="container bg-dark-green py-5 rounded-t-2xl">
        {userData ? (
          <div className="col-12 col-lg-12 bg-dark-green font-lite-gray ">

            {/* developer information */}
            <Accordion >

            <Card className="rounded">
                <Accordion.Toggle
                  eventKey='0'
                  className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                  Directions  <span></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" className="raleway-font bg-cream font-dark-blue p-1">
                  <DetailedDirections />
                </Accordion.Collapse>
              </Card>

              <Card className="rounded">
                <Accordion.Toggle
                  eventKey='1'
                  className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                  Developer Information
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey="1" className="raleway-font bg-cream font-dark-blue  p-1 font-lite-gray ">
                  <AboutMe userState={userState} setUserState={setUserState} />
                </Accordion.Collapse>
              </Card>

              {/* Social Media information */}
              <Card className="rounded">
                <Accordion.Toggle
                  eventKey='2'
                  className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                  Social Media  <span></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2" className="raleway-font bg-cream font-dark-blue  p-1">
                  <SocialMedia userState={userState} setUserState={setUserState} />
                </Accordion.Collapse>
              </Card>

              {/* project information */}
              <Card className="rounded">
                <Accordion.Toggle
                  eventKey='3'
                  className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                  Projects  <span></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3" className="raleway-font bg-cream font-dark-blue p-1">
                  <Projects userState={userState} />
                </Accordion.Collapse>
              </Card>

              

            </Accordion>
            <hr className="bg-dark-blue"></hr>
            <PortfolioBuildButton userState={userState} setUserState={setUserState} />
          </div>
        ) : (<div>No data available</div>)}
      </div>
    </main>
  );
};

export default PortfolioBuilder;