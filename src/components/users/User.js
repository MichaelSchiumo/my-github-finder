import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    bio,
    blog,
    location,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='max-w-5xl mx-auto bg-gray-700 text-white rounded'>
      <Link to='/' className='btn btn-dark rounded m-1'>
        Go Back
      </Link>

      <div className='card grid-2'>
        <div className='all-center border-solid border-4 border-gray-900 p-10 bg-gray-800 rounded'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1 className='mt-2'>{name}</h1>
          {location && <p>Location: {location}</p>}
        </div>
        <div className='border-solid border-4 border-gray-900 p-10 bg-gray-800 rounded'>
          {bio && (
            <Fragment>
              <p className='-mt-4'>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1 rounded'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: {login.toUpperCase()}</strong>
                </Fragment>
              )}
            </li>
            <li className='mt-1'>
              {company && (
                <Fragment>
                  <strong>Company: {company}</strong>
                </Fragment>
              )}
            </li>
            <li className='mt-1'>
              {blog && (
                <Fragment>
                  <strong>Website: {blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <badge className='badge badge-primary'>Followers: {followers}</badge>
        <badge className='badge badge-success'>Following: {following}</badge>
        <badge className='badge badge-light'>
          Public Repos: {public_repos}
        </badge>
        <badge className='badge badge-dark'>Public Gists: {public_gists}</badge>
      </div>
      <div className='border-solid border-4 border-gray-900 px-4 lg:px-4 text-center'>
        <h1 className='font-legal font-extrabold text-xl mt-2'>Recent Repos</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5'>
          <Repos repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default User;
