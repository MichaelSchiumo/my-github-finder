import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div class='mt-8 mx-auto max-w-6xl'>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type='text'
          name='text'
          placeholder='Search or jump to...'
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Search'
          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button onClick={githubContext.clearUsers}>Clear</button>
      )}
    </div>
  );
};

export default Search;
