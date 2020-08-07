import React from 'react';

import './custom-button.scss';

/**
 * @desc REUSABLE button
 * @option if there is type='submit' pass in to props object, then this button can trigger onSubmit 
 * @option conditionally render: if sign in then add className "isGoogleSighIn"
 */
const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButtom;