import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Directions from "../Directions/Directions"


import Auth from '../../utils/auth';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import SocialMedia from '../SocialMedia/SocialMedia';
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

  // const [portfolioData, setPortfolioData] = usestate({});

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
                    eventKey="0"
                    className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                    Developer Information  <span></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="raleway-font bg-cream font-dark-blue  p-1 font-lite-gray ">
                    <AboutMe userState={userState} setUserState={setUserState} />
                  </Accordion.Collapse>
              </Card>
              
                {/* Social Media information */}
                <Card className="rounded">
                  <Accordion.Toggle
                    eventKey="1"
                    className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                    Social Media  <span></span>  
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1" className="raleway-font bg-cream font-dark-blue  p-1">
                    <SocialMedia userState={userState} setUserState={setUserState} />
                  </Accordion.Collapse>
              </Card>
              
                {/* project information */}
                <Card className="rounded">
                  <Accordion.Toggle
                    eventKey="2"
                    className="raleway-font text-left font-lite-gray accordian-header header-bold h4 m-0 p-2 rounded bd-dark-blue border-2 shadow-2xl">
                    Projects  <span></span>  
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2" className="raleway-font bg-cream font-dark-blue p-1">
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