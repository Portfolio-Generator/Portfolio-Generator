import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
//Navbar is the header - note I couldn't import jsx?
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Login from './components/LoginForms/LoginForm';
import PortfolioBuilder from './components/PortfolioBuilder/PortfolioBuilder';
import Contact from './components/Contact/Contact';
import Setup from './components/Setup/Setup';
import Directions from './components/Directions/Directions';




const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

  function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              <Route exact path='/' component={About} />
              <Route exact path='/about' component={About} />
              <Route exact path='/setup' component={Setup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/portfolio' component={PortfolioBuilder} />

              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
            <Contact />
            <Footer />
          </>
        </Router>
      </ApolloProvider>
    );
  }
  

export default App;
