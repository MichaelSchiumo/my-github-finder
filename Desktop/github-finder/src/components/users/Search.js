import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState(' ');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText(' ');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={text}
          type='text'
          name='text'
          placeholder='Search Users...'
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
