import React from 'react';
import {
  Link
} from "react-router-dom";


class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view">
          <Link to="/productos"> <img className="d-block w-100" src={this.props.image} alt={this.props.alt} /></Link>
          <div className="mask rgba-black-light"></div>
      </div>
    )
  }
}

export default Background;