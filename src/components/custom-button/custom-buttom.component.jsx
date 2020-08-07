import React from 'react';

import './custom-button.scss';

/**
 * @desc REUSABLE button
 * @option if there is type='submit' pass in to props object, then this button can trigger onSubmit 
 */
const CustomButtom = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButtom;