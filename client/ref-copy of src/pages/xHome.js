import React from 'react';
// import ProjectList from '../components/xProjectList';
// import ProjectForm from '../components/ProjectForm/xindex';
// import FriendList from '../components/FriendList';

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_ME_BASIC } from '../utils/queries';
// test: hardcode data
const userData = [
  { me = { email:  "anitabonita@email.tst" , firstname: "Anita", lastname: "Bonita" , phone: ""} },
  { fred = { email: "anitabonita@email.tst" ,firstname: "Fred", lastname: "Dread" , phone: 1234567890} }
]

const Home = () => {
  // user has to be logged in for query_me
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const loggedIn = Auth.loggedIn();
  // test: hard coad loggedin and loading
  const loggedIn = true;
  const loading = false;

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <p>Hello galaxy</p>
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <p>You're a very nice galaxy</p>
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            
              <p>username={userData.me.email}</p>
              <p>username={userData.me.firstname}</p>
              <p>username={userData.me.lastname}</p>
              <p>username={userData.me.phone}</p>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
