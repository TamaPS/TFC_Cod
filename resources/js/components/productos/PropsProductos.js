import React from 'react';
import {
  Link
} from "react-router-dom";

class PropsProductos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col mr-5 d-flex justify-content-center mb-5">
        <div className="producto">
          <div className="foto d-flex justify-content-end mb-2">
            <Link to={`/producto?id=${this.props.id}`}><img src={this.props.image} alt={this.props.nombre} /></Link>
          </div>
          <div className="text-center nombre-producto">
            <Link to="/producto">{this.props.nombre}</Link>
          </div>
          <div className="precio-producto text-center">
            {this.props.precio}€
                </div>
        </div>
      </div>
    )
  }
}

export default PropsProductos;