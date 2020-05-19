import React from 'react';
import FotosProducto from './FotosProducto'
import FotoPortada from './FotoPortadaProducto'

class CompraProducto extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <div className="row mb-3">
            <div className=" col-lg-6 col-12 p-3">
            <div id="carouselExampleControls" className="carousel slide carrusel" data-ride="carousel">
                <div className="carousel-inner cuadro contenido">
                    <FotoPortada 
                    image = "images/productos/product-1.jpg"
                    />
                    <FotosProducto 
                    image = "images/productos/product-2.jpg"
                    />
                    <FotosProducto 
                    image = "images/productos/product-3.jpg"
                    />
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div className="col d-flex flex-column justify-content-center">
            <div className="nombre-producto mb-4">{this.props.nombre}</div>
            <div className="precio-producto mb-5">{this.props.precio}€</div>
            <div className="mt-4">
                <button type="submit" className="boton-secundario" id="logearse">Contactar al vendedor</button>
            
            </div>
        <div className="row">
            <div className="col-12 col-sm-3 vendedor mt-5 text-center">
            <a href="#"><img src={this.props.vendedor} alt="" /></a>
            </div>
            <div className="col d-flex flex-column justify-content-center ml-4 mt-3">
            
            <a href="#" className="boton-terciario ">Más productos de {this.props.nombreVendedor}</a>
            </div>
            </div>
        </div>
      </div>
      )
    }
  }
  
  export default CompraProducto;