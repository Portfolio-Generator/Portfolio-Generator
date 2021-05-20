import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"


import Auth from '../../utils/auth';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import SocialMedia from '../SocialMedia/SocialMedia';
import PortfolioBuildButton from '../PortfolioBuildButton/PortfolioBuildButton';

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
    <main>

        <div className="container">
          {userData ? (
            <div className="col-12 col-lg-12 mb-12">


              {/* developer information */}
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="montserrat-font">
                    Developer Information
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="raleway-font">
                    <AboutMe userState={userState} setUserState={setUserState} />
                  </Accordion.Collapse>
                </Card>
                {/* Social Media information */}
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="1"
                    className="montserrat-font">
                    Social Media
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1" className="raleway-font">
                    <SocialMedia userState={userState} setUserState={setUserState} />
                  </Accordion.Collapse>
              </Card>
              
                {/* project information */}
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="2"
                    className="montserrat-font">
                    Projects
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2" className="raleway-font">
                    <Projects userState={userState} setUserState={setUserState} />
                  </Accordion.Collapse>
                </Card>




              </Accordion>

              <hr></hr>
              <PortfolioBuildButton userState={userState} setUserState={setUserState} />


            </div>

          ) : (<div>No data available</div>)}
        </div>
    </main>
  );
};

export default PortfolioBuilder;