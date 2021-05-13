import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
            <h1>Dev Test 2 - this h1 is in app.js</h1>
          </div>
        </header>
        <div className="container">
          <Home />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;