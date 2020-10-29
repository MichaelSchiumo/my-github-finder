import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center max-w-5xl'>
      <img
        src={avatar_url}
        alt=''
        className='round-img mx-auto'
        style={{ width: '60px' }}
      />
      <h3 className='mt-2 text-lg font-legal extrabold'>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
