import React from 'react';
import {
  Link
} from "react-router-dom";


class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  /*RENDERIZA COMPONENTE QUE RECIBE PROPS QUE CONTIENEN LA INFORMACIÓN DE LA IMAGEN QUE SE DESEE MOSTRAR*/

  render() {
    return (
      <div className="view">
          <Link to={this.props.link}> <img className="d-block w-100" src={this.props.image} alt={this.props.alt} /></Link>
          <div className="mask rgba-black-light"></div>
      </div>
    )
  }
}

export default Background;