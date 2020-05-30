import React from 'react';
import CompraProducto from './CompraProducto';
import DescripcionProducto from './DescripcionProducto';

class BaseProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
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

  takeProduct() {
    const self = this;
    axios.get('/api/product/'+this.props.id)
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
    return (
      <div className="container">

        <CompraProducto
          nombre={this.state.product.name}
          precio={this.state.product.price}
          retager={this.state.product.retager}
          images={this.state.product.images}
        />

        <DescripcionProducto
          descripcion={this.state.product.description}
          talla={this.state.product.size}
        />

      </div>
    )
  }
}

export default BaseProducto;