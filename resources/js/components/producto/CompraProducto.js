import React from 'react';
import FotosProducto from './FotosProducto';
import FotoPortadaProducto from './FotoPortadaProducto';
import { Link } from "react-router-dom";
import Contact from '../contact/Contact';

class CompraProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fotoPortada: null,
      fotos: null
    }
    this.makeFotos = this.makeFotos.bind(this);
    this.openContact = this.openContact.bind(this);
  }

  componentDidMount() {
    this.makeFotos();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.makeFotos();
    }
  }

  makeFotos() {
    if (this.props.images) {
      let fotos = this.props.images;
      let foto = fotos.shift();

      this.setState({
        fotoPortada: <FotoPortadaProducto
          key={foto.id}
          image={foto.name}
        />
      });

      this.setState({
        fotos: fotos.map(
          function (foto) {
            return <FotosProducto
              key={foto.id}
              image={foto.name}
            />;
          }
        )
      });
    }
  }

  openContact() {
    if (this.props.userData.user.id) {
      $('#contactModal').modal('show');
    } else {
      $('#loginModal').modal('show');
    }
  }

  render() {
    var component = null;
    if (this.props.userData.user.id == this.props.userId) {
      component = <Link className='boton-secundario' to={`/editar-producto?id=${this.props.id}`} >Editar producto</Link>
    } else {
      component = <Contact productId={this.props.id} />
    }
    return (
      <div className="row mb-3">
        <div className=" col-lg-6 col-12 p-3">
          <div id="carouselExampleControls" className="carousel slide carrusel" data-ride="carousel">
            <div className="carousel-inner cuadro contenido">
              {this.state.fotoPortada}
              {this.state.fotos}
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
          {component}
          <div className="row">
            <div className="col-12 col-sm-3 vendedor mt-5 text-center">
              <Link to={`/productos-retager?id=${this.props.retager && this.props.retager.id}`}><img src={this.props.retager && this.props.retager.image} alt="" /></Link>
            </div>
            <div className="col d-flex flex-column justify-content-center ml-4 mt-3">
              <Link to={`/productos-retager?id=${this.props.retager && this.props.retager.id}`}>Más productos de {this.props.retager && this.props.retager.name}</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompraProducto;