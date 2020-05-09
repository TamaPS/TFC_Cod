import React from 'react';
import CompraProducto from './CompraProducto';
import DescripcionProducto from './DescripcionProducto';

class BaseProducto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
            <div className="row mb-3">
            
              <CompraProducto 
                nombre = "Camiseta"
                precio = "49.99"
                vendedor = "images/retager1.jpeg"
                nombreVendedor = "Vendedor 1"                
              />
                    
            </div>
                
            <div className="row mb-5">
            
              <DescripcionProducto 
                descripcion = "kjfkldjsflkjdslkfjdskljflksdjfklsjdgkgjfdljgflsdfsdfhgdgjdkjgdfjkgjdfgjdfgjdfgjkdfjgdjflkjglkdjflgkjdfljgfdjgdfjgjdfgjdgdjfkjkljgkkjgdfljgdlgjlkfjgkldfgj"
                talla = "M"
              />

            </div>
      </div>
    )
  }
}

export default BaseProducto;