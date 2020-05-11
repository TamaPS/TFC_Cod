import React from 'react';
import {
    Link
  } from "react-router-dom";
class NavbarProps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id="navIndex" className="navbar sticky-top navbar-expand-sm navbar-light">
                <a className="navbar-brand" href="/">
                    <img className="ico" src="images/logo.svg" alt="logo2" id="brand" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0 ml-auto mr-1" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/*Buscar*/}
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <i className="fas fa-search fa-lg"></i>
                            </a>
                        </li>
                        {/*Fin de Buscar*/}

                        {/*User*/}
                        <div className="ml-2 nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="user" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="far fa-user fa-lg"></i> {/* uses regular style */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="user">
                                {this.props.value.user.id && <Link className="dropdown-item" to="/" onClick={this.props.value.logoutUser}>Cerrar Sesión</Link>}
                                {this.props.value.user.id && <a className="dropdown-item" href="">Editar Perfil</a>}
                                {!this.props.value.user.id && <a className="dropdown-item" href="" data-toggle="modal" data-target="#loginModal">Iniciar Sesión</a>}
                                {!this.props.value.user.id && <a className="dropdown-item" href="" data-toggle="modal" data-target="#registerModal">Registro</a>}
                            </div>
                        </div>
                        {/*Fin de User*/}

                        {/*Favs*/}
                        {this.props.value.user.id &&
                            <li className="ml-2 nav-item">
                                <a className="nav-link" href="/">
                                    <i className="fas fa-heart fa-lg"></i>
                                </a>
                            </li>
                        }
                        {/*Fin de Favs*/}

                        {/*Productos*/}
                        {this.props.value.user.id &&
                            <li className="ml-2 nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="product" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <img className="ico" src="images/producto.svg" height="30px" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="product">
                                    <a className="dropdown-item" href="nuevoProducto.html">Añadir Producto</a>
                                    <a className="dropdown-item" href="">Mis Productos</a>
                                </div>
                            </li>
                        }
                        {/*Fin de Productos*/}

                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavbarProps;