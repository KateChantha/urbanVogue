import React from 'react';

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

    // {[name]: } destructuring object's property called name
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
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    )
  }
}

export default SignIn;