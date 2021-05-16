import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import AboutMe from '../AboutMe/AboutMe';
// how do I destructure query data into userstate?
// const setUserState: (data) => {
//   userState.email = data.email;
// }
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
  else console.log(JSON.stringify(userData))
  // const renderUserStuff = ()=>{
  //   return userState ? (
  //     <div className="col-12 col-lg-3 mb-3">
  //       <div>
  //         <p>QUERY DATA:</p>
  //       </div>
  //         <AboutMe userState={userState} setUserState={setUserState}/>
  //       <ul>
  //         <li>userState.email={userState.email}</li>
  //         <li>userState.firstname={userState.firstname}</li>
  //         <li>userState.lastname={userState.lastname}</li>
  //         <li>userState.phone={userState.phone}</li>
  //       </ul>
  //     </div>
  //   ) : (<div>No data available</div>)
  // }
  return (
    <main>
      <button onClick={()=>testFunction()}>TEST</button>
      <div className="flex-row justify-space-between">
        <div className="container">
            <div className="col-12 mb-3">
              <h2>PORTFOLIO BUILDER </h2>
            </div>
          {userData ? (
            <div className="col-12 col-lg-3 mb-3">
              <div>
                <p>QUERY DATA:</p>
              </div>
              <AboutMe userState={userState} setUserState={setUserState}/>
              <ul>
                <li>userData.email={userState.email}</li>
                <li>userData.firstname={userState.firstname}</li>
                <li>userData.lastname={userState.lastname}</li>
                <li>userData.phone={userState.phone}</li>
              </ul>
            </div>
          ) : (<div>No data available</div>)}
        </div>
      </div>
    </main>
  );
};

export default PortfolioBuilder;