import React from 'react';

export const ServerErrorPage = ({ staticContext = {} }) => {
  // coming from static router, staticContext doesnt exits in browser
  staticContext.serverError = true;
  return (
    <div className={`page page-server-error`}>
      <h1>500</h1>
    </div>
  )
};

export default {
  component: ServerErrorPage
};
