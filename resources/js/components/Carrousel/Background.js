import React from 'react';


class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view">
          <a href="productos.html"> <img className="d-block w-100" src={this.props.image} alt={this.props.alt} /></a>
          <div className="mask rgba-black-light"></div>
      </div>
    )
  }
}

export default Background;