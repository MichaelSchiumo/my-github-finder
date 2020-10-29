import React from 'react';

const Logos1 = () => {
  return (
    <div>
      <div class='bg-gray-700'>
        <div class='max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-2xl mb-4 text-white font-legal font-extrabold'>
            Current Stack
          </h1>
          <div class='grid grid-rows-1 gap-8 md:grid-cols-6 lg:grid-cols-10'>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='fab fa-js-square fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='fab fa-react fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-ruby-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-rails-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-postgresql-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-html5-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-css3-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-express-original fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-nodejs-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
            <div class='col-span-3 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-mongodb-plain fa-3x text-sm lg:text-2xl text-white'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos1;
