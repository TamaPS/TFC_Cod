import React from 'react';

class DescripcionProducto extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div  className="row mb-5">
            <div className="col-12 col-sm-9">
                <div className="descripcion mb-3">
                    Descripción del producto
                </div>
                <div className="texto-descripcion">
                    {this.props.descripcion}                
                </div>
            </div>
            <div className="col">
                <div className="descripcion mb-3">
                    Talla
                </div>
                <div className="texto-descripcion">
                    {this.props.talla}
                </div>
            </div>
        </div>
      )
    }
  }
  
  export default DescripcionProducto;