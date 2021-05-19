import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import AboutMe from '../AboutMe/AboutMe';
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
    fontPref:0,
    projects: [],
    socialMedia: []
  });

  // todo: set up a second state for projects
  // const [portfolioData, setPortfolioData] = usestate({});


  let { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  useEffect(()=>{
    console.log(data)
    if(data){
      setUserState(data.me)
    }
    console.log(userState)
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

      <div className="flex-row justify-space-between">
        <div className="container">
          {userData ? (
            <div className="col-12 col-lg-3 mb-3">
              <AboutMe userState={userState} setUserState={setUserState}/>
              <hr></hr>
              <PortfolioBuildButton userState={userState} setUserState={setUserState}/>
            </div>
          ) : (<div>No data available</div>)}
        </div>
      </div>
    </main>
  );
};

export default PortfolioBuilder;