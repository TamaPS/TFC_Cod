import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
/*RENDERIZA EL LOGOTIPO DE LA PÁGINA*/
  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="d-flex justify-content-center">
          <Link to="/"><figure><img src="images/logo.svg" id="logo" /></figure></Link>
        </div>
      </div>
    )
  }
}

export default Header;