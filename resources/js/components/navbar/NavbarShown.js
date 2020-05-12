import React from 'react';
import NavbarProps from './NavbarProps'
import { userContext } from '../login/userContext';
class NavbarShown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <userContext.Consumer>
        {
          function (value) {
            return(<NavbarProps value={value} class="scrolled" />);
          }
        }
      </userContext.Consumer>
    )
  }
}

export default NavbarShown;