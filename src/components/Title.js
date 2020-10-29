import React from 'react';
import NavBar from './layout/NavBar.js';
import GitHubIcon from '@material-ui/icons/GitHub';

const Title = () => {
  return (
    <div class='bg-gray-800'>
      <div class='max-w-screen-xl mx-auto sm:py-24 sm:px-10 lg:px-0 lg:py-6'>
        <div class='text-center'>
          <p class='mt-1 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-4xl'>
            <div className='items-center h-12 lg:h-8'>
              <GitHubIcon fontSize='large' className='text-white' />
              <span className='text-white ml-2 text-2xl'>GithubFinder</span>
            </div>
          </p>
          <p class='max-w-5xl p-1 lg:p-0 lg:mt-2 lg:max-w-xl mx-auto text-md lg:text-xl leading-7 text-gray-500'>
            Welcome to GithubFinder! <br />
            Enter the name of the user that you want to find below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
