import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center h-20'>
          <GitHubIcon fontSize='large' className='text-white' />{' '}
          <span className='text-white ml-2 text-2xl'>GithubFinder</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
