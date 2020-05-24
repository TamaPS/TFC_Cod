import React from 'react';
import BaseEditProduct from './editproduct/BaseEditProduct';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import { userContext } from './login/userContext';

class EditProduct extends React.Component {
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
                                <BaseEditProduct userData={userData}/>
                            )
                        }
                    }
                </userContext.Consumer>
                <Copyright />
            </div>
        )
    }
}

export default EditProduct;