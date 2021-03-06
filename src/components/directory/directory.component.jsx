import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.scss';

/**
 * Need to store state value of MenuItem
 */
class Directory extends React.Component {
  constructor() {
    super();

    // store state of MenuItem section
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  // === REFACTORING #1 ======================
  // {
  //   this.state.sections.map(section => (
  //     <MenuItem key={section.id} title={section.title} image={section.imageUrl} />
  //   ))
  // }
  // === REFACTORING #2 ======================
  // {
  //   this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => (
  //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
  //   ))
  // }
  /** 
   * @desc map over using destructuring on section object
   */
  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;