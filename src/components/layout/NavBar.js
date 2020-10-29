import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0'></div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex'>
                <span>
                  <GitHubIcon className='text-white ml-4' fontSize='large' />
                </span>
                <p className='ml-4 px-3 py-2 rounded-md text-2xl font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
                  GithubFinder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
