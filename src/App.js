import React from 'react';
import NavBar from './components/layout/NavBar';
import GithubState from './context/github/GithubState';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/users/User';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './styles/main.css';
import Footer from './components/Footer';
import './App.css';

import Search from './components/users/Search.js';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='bg-gray-500'>
            <NavBar />
            <div id='body' className='min-h-screen'>
              <Alert />
              <Search className='mx-auto' />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
