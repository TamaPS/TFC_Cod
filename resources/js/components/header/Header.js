import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container-fluid">
        <br />
        <div className="d-flex justify-content-center">
          <Link to="/"><figure><img src="images/logo.svg" id="logo" /></figure></Link>
        </div>
      </section>
    )
  }
}

export default Header;