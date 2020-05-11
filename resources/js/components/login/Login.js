import React from 'react';
import LoginProps from './LoginProps'
import { userContext } from '../login/userContext';
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <userContext.Consumer>
        {
          function (value) {
            return(<LoginProps value={value} />);
          }
        }
      </userContext.Consumer>
    )
  }
}

export default Login;