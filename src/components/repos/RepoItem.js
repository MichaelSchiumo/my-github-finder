import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <div>
        <badge className='badge badge-dark'>
          <a className='text-white' href={repo.html_url}>
            {repo.name}
          </a>
        </badge>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
