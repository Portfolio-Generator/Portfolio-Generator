import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Auth from './utils/auth';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './pages/Home';
import Login from './pages/Login';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
{/*  where's the path coming in? */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />

              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>

          </div>
        </header>
       
        </div>
        </Router>

    </ApolloProvider>
  );
}

export default App;
