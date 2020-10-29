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
    <div>
      <div>
        <form onSubmit={onSubmit} className='max-w-5xl mx-auto'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
          />
          {githubContext.users.length === 0 && (
            <input
              type='submit'
              value='Search'
              className='btn-block bg-gray-900 hover:bg-gray-700 text-white font-bold rounded text-white p-1'
            />
          )}
        </form>
        {githubContext.users.length > 0 && (
          <button
            className='max-w-5xl mx-auto btn-block bg-gray-900 hover:bg-gray-700 text-white font-bold rounded text-white p-1 btn-block'
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
