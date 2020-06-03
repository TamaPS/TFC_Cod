import React from 'react';
import CompraProducto from './CompraProducto';
import DescripcionProducto from './DescripcionProducto';
import { userContext } from '../login/userContext';

class BaseProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    this.takeProduct();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.takeProduct();
    }
  }

  takeProduct() { //OBTIENE LOS DATOS DEL PRODUCTO DEL BACK
    const self = this;
    axios.get('/api/product/' + this.props.id)
      .then(function (response) {
        self.setState({
          product: response.data.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var product = this.state.product;
    return (
      <div className="container">
        <br />
        <userContext.Consumer>
          {
            function (value) {//PASA LOS DATOS DEL PRODUCTO DEL BACK AL COMPONENTES
              return (
                <CompraProducto
                  id={product.id}
                  nombre={product.name}
                  precio={product.price}
                  retager={product.retager}
                  images={product.images}
                  userId={product.user_id}
                  userData={value}
                />);
            }
          }
        </userContext.Consumer>

        <DescripcionProducto
          descripcion={this.state.product.description}
          talla={this.state.product.size}
        />

      </div>
    )
  }
}

export default BaseProducto;