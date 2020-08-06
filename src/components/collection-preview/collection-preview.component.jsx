import React from 'react';

import './collection-preview.scss';

/**
 * @param title string
 * @param items array
 * map over items array
 * filter out limit to 4 items
 * TODO: Perfromance concern due to everytime CollectionPreview got rerender, items.filer().map() will get call again and they have to be rerendered
 * TODO: logic filter out item, should be 4 hot feed
 */
const CollectionPreview = ({ title, items }) =>
  (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  )

export default CollectionPreview;