import React from 'react';

import './form-input.scss';

/** REFERNCE
<input/x/FormInput name='email' type='email' label='email'
  value={this.state.email} onChange/x/handleChage={this.handleChange}
  required
/>
 */
/**
 * to make FormInput reusable
 * @option <label> is optional to be rendered if there is one 
 * @desc at <label className, when user typein then otherProps.value.length is evaluated truthy then add another classname 'shrink'
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput;