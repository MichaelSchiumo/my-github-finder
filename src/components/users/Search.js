import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
      githubContext.clearUsers();
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='p-2 lg:p-0'>
      <div className='max-w-5xl mx-auto'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
            className='bg-gray-700 text-white rounded'
          />
          {githubContext.users.length === 0 && (
            <input
              type='submit'
              value='Search'
              className='btn-block bg-gray-900 hover:bg-gray-700 text-white font-bold rounded p-1 mx-auto'
            />
          )}
        </form>
        {githubContext.users.length > 0 && (
          <button
            className='btn-block btn-dark p-1'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
