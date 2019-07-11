import React from 'react';
import App from '../App';
import Home from '../pages/homePage/Home';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import PostsPage from '../pages/postsPage/PostsPage';
import UsersPage from '../pages/usersPage/UsersPage';
import LoginPage from '../pages/loginPage/LoginPage.container';
import RegisterPage from '../pages/registerPage/RegisterPage';
import SinglePostPage from '../pages/singlePostPage/SinglePostPage';
import SingleUserPage from '../pages/singleUserPage/SingleUserPage';
import ProfilePage from '../pages/profilePage/ProfilePage';
import SystemPage from '../pages/systemPage/SystemPage';

const Routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...Home,
      },
      {
        path: '/login',
        ...LoginPage,
      },
      {
        path: '/register',
        ...RegisterPage,
      },
      {
        path: '/posts',
        ...PostsPage,
      },
      {
        path: '/post/:postId',
        ...SinglePostPage,
      },
      {
        path: '/user',
        exact: true,
        ...ProfilePage,
      },
      {
        path: '/user/:userId',
        ...SingleUserPage,
      },
      {
        path: '/users',
        ...UsersPage,
      },
      {
        path: '/system',
        ...SystemPage,
      },
      {
        ...NotFoundPage,
      }
    ]
  }
];

export default Routes;
