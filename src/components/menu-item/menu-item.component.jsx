import React from 'react';
import './menu-item.scss';

/**
 * dynamicly generate title and image that passing thru props
 * destructuring {tilte} instead of writing props.tilte
 */
const MenuItem = ({ title }) => (
  <div className='menu-item'>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)