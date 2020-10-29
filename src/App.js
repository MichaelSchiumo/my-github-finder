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
import Title from './components/Title';
import Icons from './components/Icons.js';
import './App.css';

import Search from './components/users/Search.js';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='bg-gray-500'>
            <div id='body' className='min-h-screen mb-4'>
              <Title />
              <Alert />
              <Search className='mx-auto' />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Icons />
            <Footer />
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
