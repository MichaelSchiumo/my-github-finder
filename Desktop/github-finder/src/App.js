import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import UserItem from './components/users/UserItem';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <UserItem />
      </div>
    );
  }
}

export default App;
