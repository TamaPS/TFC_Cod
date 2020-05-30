import React from 'react';
import BaseEditProduct from './editproduct/BaseEditProduct';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import { userContext } from './login/userContext';
import { withRouter } from "react-router-dom";

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
        this.takeProduct = this.takeProduct.bind(this);
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
        console.log('takeProduct');
        const self = this;
        const { location } = this.props;
        axios.get('/api/product/' + location.search.slice(4))
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
        var takeProduct = this.takeProduct;
        if (product.id) {
            return (
                <div>
                    <NavbarShown />
                    <userContext.Consumer>
                        {
                            function (userData) {
                                return (
                                    <BaseEditProduct userData={userData} product={product} takeProduct={takeProduct}/>
                                )
                            }
                        }
                    </userContext.Consumer>
                    <Copyright />
                </div>
            )
        }
        else {
            return (<div>Cargando...</div>);
        }
    }
}

export default withRouter(EditProduct);