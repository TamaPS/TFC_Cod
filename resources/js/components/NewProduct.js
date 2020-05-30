import React from 'react';
import BaseNewProduct from './newproduct/BaseNewProduct';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import { userContext } from './login/userContext';

class NewProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarShown />
                <userContext.Consumer>
                    {
                        function (userData) {
                            return (
                                <BaseNewProduct userData={userData} />);
                        }
                    }
                </userContext.Consumer>
                <Copyright />
            </div>
        )
    }
}

export default NewProduct;