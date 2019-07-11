import React from 'react';

export const AccessDeniedPage = ({ staticContext = {} }) => {
  // coming from static router, staticContext doesnt exits in browser
  staticContext.accessDenied = true;
  return (
    <div className={`page page-access-denied`}>
      <h1 className={`page-access-denied__title`}>403</h1>
    </div>
  )
};

export default {
  component: AccessDeniedPage
};
