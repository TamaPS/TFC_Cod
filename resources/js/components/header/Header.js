import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container-fluid">
        <br />
        <div className="d-flex justify-content-center">
          <a href="/"><figure><img src="images/logo.svg" id="logo" /></figure></a>
        </div>
      </section>
    )
  }
}

export default Header;