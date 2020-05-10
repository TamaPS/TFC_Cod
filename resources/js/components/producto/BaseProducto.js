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
          
              <CompraProducto 
                nombre = "Camiseta"
                precio = "49.99"
                vendedor = "images/retager2.jpeg"
                nombreVendedor = "Vendedor 1"                
              />
    
              <DescripcionProducto
                descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum suscipit illo, error sapiente, dicta architecto ad, quibusdam atque labore aut! Aut in praesentium, rerum quia fuga voluptas mollitia consectetur neque consequuntur corrupti blanditiis iusto officia repudiandae minus est dolore itaque! Nihil adipisci illum excepturi enim est tenetur! Et atque reiciendis non saepe, qui porro eligendi repudiandae totam cum nam, illum fugit, facilis enim laboriosam architecto. Vero accusamus odit beatae ut labore temporibus iste repudiandae ratione saepe, molestias tempora? Architecto et provident dolorem sed omnis voluptas sunt officia voluptatum? Laudantium fuga error quos accusantium. Repudiandae distinctio necessitatibus obcaecati fuga! Optio."
                talla = "M"
              />

      </div>
    )
  }
}

export default BaseProducto;