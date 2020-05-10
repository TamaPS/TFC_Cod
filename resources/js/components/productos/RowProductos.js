import React from 'react';
import PropsProductos from './PropsProductos';

class RowProductos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid mt-5 d-flex justify-content-center ">
            <div className="row">
                <PropsProductos 
                    image = "images/productos/product-1.jpg"
                    nombre = "Camiseta"
                    precio = "49.99"
                />
                <PropsProductos 
                    image = "images/productos/product-2.jpg"
                    nombre = "Camiseta"
                    precio = "49.99"
                />
                <PropsProductos 
                    image = "images/productos/product-3.jpg"
                    nombre = "Camiseta"
                    precio = "49.99"
                />
                <PropsProductos 
                    image = "images/productos/product-4.jpg"
                    nombre = "Camiseta"
                    precio = "49.99"
                />
                <PropsProductos 
                    image = "images/productos/product-5.jpg"
                    nombre = "Camiseta"
                    precio = "49.99"
                />
            </div>
        </div>
    )
  }
}

export default RowProductos;