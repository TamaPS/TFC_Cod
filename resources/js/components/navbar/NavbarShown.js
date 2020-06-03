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
            //NAVBAR PARA PÁGINAS SIN LOGO
            return(<NavbarProps value={value} classProp="scrolled" />);
          }
        }
      </userContext.Consumer>
    )
  }
}

export default NavbarShown;