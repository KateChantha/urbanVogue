import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

/**
 * dynamicly generate title and image that passing thru props
 * destructuring {tilte} instead of writing props.tilte
 */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// pass MenuItem to withRouter which is a HOC-Higher Order Component/Function so that MenuItem able to gain access to anything realated to router such as history and match
// withRouter(MenuItem)returns super power MenuItem
export default withRouter(MenuItem);   