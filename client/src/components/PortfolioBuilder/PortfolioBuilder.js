import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import { UPDATE_USER } from '../../utils/mutations';

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

  const [updateUser] = useMutation(UPDATE_USER);

  let { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  useEffect(()=>{
    console.log(data)
    if(data){
      setUserState(data.me)
    }
    console.log(userState)
  }, [data])

  const handleSaveUser = async event => {
    // event.preventDefault(); says not a function!
    console.log('handleSaveUser data to save', userState);
    try {
      await updateUser({
        variables: { ...userState },
      });
    } catch (e) {
      console.error(e);
    }
  };



  const testFunction =  ()=>{
    console.log("userData:", userData)
    console.log("userState:", userState)
  }
  
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
      <button onClick={() => testFunction()}>TEST</button>
      <button onClick={()=>handleSaveUser(userState)}>Save Data</button>

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