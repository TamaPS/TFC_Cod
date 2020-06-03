import React from 'react';
import BaseEditProduct from './editproduct/BaseEditProduct';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import { userContext } from './login/userContext';
import { withRouter } from "react-router-dom";
import Loading from './Loading';
import Unauthorized from './Unauthorized';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
        this.takeProduct = this.takeProduct.bind(this);
    }

    //OBTIENES EL PRODUCTO AL CARGAR ESTE COMPONENTE (EDITPRODUCT)
    componentDidMount() {
        this.takeProduct();
    }

    //OBTIENES EL PRODUCTO DESPUES DE GUARDAR CAMBIOS
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.takeProduct();
        }
    }

    //MÉTODO PARA OBTENER PRODUCTO DEL BACK
    takeProduct() {
        const self = this;
        const { location } = this.props;
        axios.get('/api/product/' + location.search.slice(4)) //location con id del producto
            .then(function (response) {
                self.setState({
                    product: response.data.data //respuesta+datos del producto
                });
            })
            .catch(function (error) {
                console.log(error); //En caso de recibir respuesta errónea
            });
    }

    render() {
        var product = this.state.product;
        var takeProduct = this.takeProduct;
        if (product.id) {
            return (
                <userContext.Consumer>
                    {
                        function (userData) {
                            if (product.user_id == userData.user.id) { //Comprueba que el producto es del usuario logueado
                                return (
                                    <div>
                                        <NavbarShown />
                                        <BaseEditProduct userData={userData} product={product} takeProduct={takeProduct} /> {/*Pasa los Datos a baseEditProduct*/}
                                        <Copyright />
                                    </div>
                                );
                            } else {
                                return (<Unauthorized />);
                            }
                        }
                    }
                </userContext.Consumer>
            )
        }
        else {
            //APARECE LOADING HASTA QUE HAY RESPUESTA POSITIVA DE takeProduct()
            return (
                <div>
                    <NavbarShown />
                    <Loading />
                    <Copyright />
                </div>
            );
        }
    }
}

export default withRouter(EditProduct);