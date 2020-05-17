import React from 'react';
import BaseRegister from './register/BaseRegister';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import { userContext } from './login/userContext';
class Register extends React.Component {
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
                                <BaseRegister userData={userData} />);
                        }
                    }
                </userContext.Consumer>
                <Copyright />
            </div>
        )
    }
}

export default Register;