import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// test: hardcode data
// import Auth from '../utils/auth';
// import { QUERY_ME_BASIC } from '../utils/queries';
const userData = {
  me : { email:  "anitabonita@email.tst" , firstname: "Anita", lastname: "Bonita" , phone: "1234567890"} ,
  fred: { email: "anitabonita@email.tst" ,firstname: "Fred", lastname: "Dread" , phone: ""}
}

const PortfolioBuilder = () => {
 // user has to be logged in for query_me
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const loggedIn = Auth.loggedIn();

  // test: hard code loggedin and loading
  const loggedIn = true;
  const loading = false;


  return (
       <main>
      <div className="flex-row justify-space-between">
      <div className="container">

        {loggedIn && (
          <div className="col-12 mb-3">
            <h2>PORTFOLIO BUILDER COMPONENT</h2>
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
                <p>Here is some hard-coded sample data</p>
            </div>
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <ul>
              <li>userData.me.email={userData.me.email}</li>
              <li>userData.me.firstname={userData.me.firstname}</li>
              <li>userData.me.lastname={userData.me.lastname}</li>
            <li>userData.me.phone={userData.me.phone}</li>
            </ul>
          </div>
          ) : null}
          </div>
      </div>
      </main>
  );
};

export default PortfolioBuilder;
