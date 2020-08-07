import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDetault();

    // clear out feild after submit
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;

    // {[name]: }
    // dynamicly setting property refer to  
    // <input name='email' />
    // <input name='password' />      
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          {/* <input type='submit' value='Submit Form' /> */}
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} >
            {' '}
          Sign In with Google{' '}
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;