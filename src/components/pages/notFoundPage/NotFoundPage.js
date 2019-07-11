import React from 'react';

export const NotFoundPage = ({ staticContext = {} }) => {
  // coming from static router, staticContext doesnt exits in browser
  staticContext.notFound = true;
  return (
    <div className={`page page-not-found`}>
      <h1 className={`page-not-found__title`}>404</h1>
    </div>
  )
};

export default {
  component: NotFoundPage
};
