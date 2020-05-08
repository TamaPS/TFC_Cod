import React from 'react';

class PropsProductos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col mr-5 d-flex justify-content-center mb-5">
            <div className="producto">
                <div className="foto d-flex justify-content-end mb-2">
                    <a href="pProducto.html"><img src={this.props.image} alt={this.props.nombre} /></a>
                </div>
                <div className="text-center nombre-producto">
                    <a href="pProducto.html">{this.props.nombre}</a> 
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