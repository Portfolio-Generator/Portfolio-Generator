import React, { useState } from 'react';
// import Auth from './utils/auth';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import NavTabs from './components/Header/NavTabs';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Home':
        return <Home />;
      case 'Login':
        return <Login />;
        case 'Logout':
          return <Logout />;
      default:
        return <Home />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="bg-secondary mb-4 py-2 flex-row align-center">
          <div>
            {/* Pass the state value and the setter as props to NavTabs */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function passing in the currentPage */}
            <hr></hr>
            <div className="page-container">{renderPage(currentPage)}</div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
        </div>
    </ApolloProvider>
  );
}

export default App;
