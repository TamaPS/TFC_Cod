import React from 'react';
import NavbarProps from './NavbarProps'
import { userContext } from '../login/userContext';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <userContext.Consumer>
        {
          function (value) {
            //NAVBAR PARA PÁGINAS CON LOGO, CLASE DINÁMICA SEGÚN SCROLL
            return(<NavbarProps value={value} classProp="navScrolled" />);
          }
        }
      </userContext.Consumer>
    )
  }
}

export default Navbar;