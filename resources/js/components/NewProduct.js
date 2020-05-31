import React from 'react';
import BaseNewProduct from './newproduct/BaseNewProduct';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import Unauthorized from './Unauthorized';
import { userContext } from './login/userContext';

class NewProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <userContext.Consumer>
                {
                    function (userData) {
                        if (userData.user.id) {
                            return (
                                <div>
                                    <NavbarShown />
                                    <BaseNewProduct userData={userData} />
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
}

export default NewProduct;