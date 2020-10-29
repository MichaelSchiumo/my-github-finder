import React, { Fragment } from 'react';
import Search from '../users/Search.js';
import Users from '../users/Users';

const Home = () => {
  return (
    <div class='relative bg-gray-50 overflow-hidden'>
      <div class='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'>
        <div class='relative h-full max-w-screen-xl mx-auto'></div>
      </div>
      <div class='relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
        <div class='max-w-screen-xl mx-auto px-4 sm:px-6'>
          <nav class='relative flex items-center justify-between sm:h-10 md:justify-center'>
            <div class='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
              <div class='flex items-center justify-between w-full md:w-auto'>
                <div class='-mr-2 flex items-center md:hidden'>
                  <button
                    type='button'
                    class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                    id='main-menu'
                    aria-label='Main menu'
                    aria-haspopup='true'
                  >
                    <svg
                      class='h-6 w-6'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
          <div class='rounded-lg shadow-md'>
            <div
              class='rounded-lg bg-white shadow-xs overflow-hidden'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='main-menu'
            >
              <div class='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img
                    class='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                    alt=''
                  />
                </div>
                <div class='-mr-2'>
                  <button
                    type='button'
                    class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                    aria-label='Close menu'
                  >
                    <svg
                      class='h-6 w-6'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main class='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28'>
          <div class='text-center'>
            <h2 class='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
              Data to enrich your
              <br class='xl:hidden' />
              <span class='text-indigo-600'>online business</span>
            </h2>
            <p class='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
              <div class='rounded-md shadow'>
                <a
                  href='#'
                  class='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                >
                  Get started
                </a>
              </div>
              <div class='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <Search />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <Users />
      </div>
    </div>
  );
};

export default Home;
